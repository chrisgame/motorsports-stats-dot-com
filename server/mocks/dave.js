module.exports = function(app) {
  var express = require('express');
  var daveRouter = express.Router();

  daveRouter.get('/', function(req, res) {
    res.send({
      'dave': []
    });
  });

  daveRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  daveRouter.get('/:id', function(req, res) {
    res.send({
      'dave': {
        id: req.params.id
      }
    });
  });

  daveRouter.put('/:id', function(req, res) {
    res.send({
      'dave': {
        id: req.params.id
      }
    });
  });

  daveRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/dave', daveRouter);
};
