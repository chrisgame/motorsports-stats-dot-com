module.exports = function(app) {
  var express = require('express');
  var practiceRouter = express.Router();
  practiceRouter.get('/practices/*', function(req, res) {
    res.send(
      {
          "practice": {
              "id": 898, 
              "practice_session_ids": [
                  540, 
                  541, 
                  542
              ]
          }
      }
    )
  });
  app.use('/', practiceRouter);
};  
