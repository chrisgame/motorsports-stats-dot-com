module.exports = function(app) {
  var express = require('express');
  var qualifiesRouter = express.Router();
  qualifiesRouter.get('/qualifies/*', function(req, res) {
    res.send(
      {
          "qualify": {
              "id": 898, 
              "qualify_session_ids": [
                  207
              ]
          }
      }
    )
  });
  app.use('/', qualifiesRouter);
};
