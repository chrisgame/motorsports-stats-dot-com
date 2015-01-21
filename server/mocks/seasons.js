module.exports = function(app) {
  var express = require('express');
  var f1Router = express.Router();
  f1Router.get('/seasons', function(req, res) {
    res.send(
              {
                  "seasons": [
                      {
                          "id": 2013, 
                          "round_ids": [
                              879, 
                              880, 
                              881, 
                              882, 
                              883, 
                              884, 
                              885, 
                              886, 
                              887, 
                              888, 
                              889, 
                              890, 
                              891, 
                              892, 
                              893, 
                              894, 
                              895, 
                              896, 
                              897
                          ]
                      }, 
                      {
                          "id": 2014, 
                          "round_ids": [
                              898, 
                              899, 
                              900, 
                              901, 
                              902, 
                              903, 
                              904, 
                              905, 
                              906, 
                              907, 
                              908, 
                              909, 
                              910, 
                              911, 
                              912, 
                              913, 
                              914, 
                              915, 
                              916
                          ]
                      }
                  ]
              }
      );
  });
  app.use('/', f1Router);
};
