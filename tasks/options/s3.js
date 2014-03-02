module.exports = {
  options: {
    key: process.env.AWS_ACCESS_KEY_ID,
    secret: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.MOTORSPORTS_STATS_PRE_PROD_BUCKET,
    region: 'eu-west-1',
    access: 'public-read',
  },
  deploy: {
    upload: [
      {
        src: 'dist/**/*',
        rel: 'dist/'
      }
    ]
  }
};
