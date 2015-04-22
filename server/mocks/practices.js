module.exports = function(app) {
  var express = require('express');
  var practiceRouter = express.Router();
  practiceRouter.get('/practices/:id', function(req, res) {
    var result;

    switch(req.params.id){
      case '898':
      result = {
        "practice": {
          "id": 898,
          "practice_session_ids": [
              540,
              541,
              542
          ]
        }
      };
      break;
    }
    res.send(result)
  });
  app.use('/', practiceRouter);
};
