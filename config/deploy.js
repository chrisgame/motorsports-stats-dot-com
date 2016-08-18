var VALID_DEPLOY_TARGETS = [
  'prod'
];

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    redis: {
      allowOverwrite: true,
      keyPrefix: 'motorsports-stats-dot-com'
    },
    s3: {}
  };
  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  if (deployTarget === 'prod') {
    ENV.build.environment = 'production';
    ENV.s3.accessKeyId = process.env.AWS_KEY;
    ENV.s3.secretAccessKey = process.env.AWS_SECRET;
    ENV.s3.bucket = 'prod.motorsports.stats.dot.com';
    ENV.s3.region = 'eu-west-1';
  }

  if (deployTarget === 'prod') {
    ENV.redis.url = process.env.REDISTOGO_URL;
  }

  return ENV;
}
