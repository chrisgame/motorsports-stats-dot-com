#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

/**
 * Example: node deploy.js
 * 
 * Getting Started
 *    Set the following environment variables:
 *    AWS_SECRET_ACCESS_KEY=
 *    AWS_ACCESS_KEY_ID=
 *    AWS_REGION=eu-west-1
 * 
 * References: 
 * Alvin Crespoi (An S3 deploy script for ember-cli)[https://gist.github.com/alvincrespo/10335555]
 * Ken Tabor (NodeJS Deploying Files to AWS S3)[http://blog.katworksgames.com/2014/01/26/nodejs-deploying-files-to-aws-s3/]
 */

var args = process.argv.slice(2);
var bucketName = args[0].toUpperCase()+'_BUCKET_NAME'
var buckets = {"PRE_PRODUCTION_BUCKET_NAME":process.env.MOTORSPORTS_STATS_PRE_PROD_BUCKET,
               "PRODUCTION_BUCKET_NAME":process.env.MOTORSPORTS_STATS_PROD_BUCKET}

var aws = require('aws-sdk');

var s3 = new aws.S3();
var fs = require('fs');

function deployDist() {
  console.log('Deploying to '+buckets[bucketName]);
  var dir = 'dist/';
  var filelist = getFileList(dir);

  filelist.forEach(function(entry){
    // Removes the dist directory from the filename
    // e.g. dist/assets/app.css => assets/app.css
    var remotefilename = entry.replace(/^dist\//, '');
    var filename = './' + entry;

    upload(remotefilename, filename, buckets[bucketName]);
  });
}

function upload(remotefilename, filename, bucketname) {
  var fileBuffer = fs.readFileSync(filename);
  var metaData = getContentType(filename);
  var params = {
    ACL: 'public-read',
    Bucket: bucketname,
    Key: remotefilename,
    Body: fileBuffer,
    ContentType: metaData
  };

  function callback(error, response){
    if (error) {
      console.log("FIRE");
      console.log(error);
    } else {
      console.log('Uploaded file[' + filename + '] to [' + remotefilename + '] as [' + metaData + ']');
    }
  }

  // Call S3 and Push Objects
  s3.putObject(params, callback);
}

function getFileList(path) {
  var i, fileInfo, filesFound;
  var fileList = [];

  filesFound = fs.readdirSync(path);

  for (i = 0; i < filesFound.length; i++) {
    fileInfo = fs.lstatSync(path + filesFound[i]);

    if (fileInfo.isFile()) {
      // Checks to ensure that we do not push files that start with a dot
      // e.g. .gitkeep
      if (!filesFound[i].match(/^\.\w*/)) {
        fileList.push(path + filesFound[i]);
      }
    }
    if(fileInfo.isDirectory()){
      if (!filesFound[i].match(/^\.\w*/)) {
        var foundDirs = getFileList(path + filesFound[i] + "/");
        fileList = fileList.concat(foundDirs);
      }
    }
  }

  return fileList;
}

function getContentType(filename) {
  var rc, fileType;

  filename = filename.toLowerCase();
  fileType = filename.match(/\.([^\.]+)$/)[1];

  switch (fileType){
    case 'html':
    rc = 'text/html';
    break;
    case 'css':
    rc = 'text/css';
    break;
    case 'json':
    rc = 'application/json';
    break;
    case 'js':
    rc = 'application/javascript';
    break;
    case 'png':
    rc = 'image/png';
    break;
    case 'jpg':
    rc = 'image/jpg';
    break;
    default:
    rc = 'application/octet-stream';
    break;
  }

  return rc;
}

deployDist();
