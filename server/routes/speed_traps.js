module.exports = function(app) {
  var express = require('express');
  var speedTrapsRouter = express.Router();
  speedTrapsRouter.get('/speed_traps', function(req, res) {
    res.send(
      {
          "speed_traps": [
              {
                  "car_number": 77, 
                  "driver": "Valtteri  Bottas", 
                  "id": 13632, 
                  "position": 1, 
                  "speed": "318.5", 
                  "time_of_day": "13:29:03"
              }, 
              {
                  "car_number": 20, 
                  "driver": "Kevin Magnussen", 
                  "id": 13633, 
                  "position": 2, 
                  "speed": "317.0", 
                  "time_of_day": "13:25:00"
              }, 
              {
                  "car_number": 26, 
                  "driver": "Daniil Kvyat", 
                  "id": 13634, 
                  "position": 3, 
                  "speed": "314.2", 
                  "time_of_day": "13:19:49"
              }, 
              {
                  "car_number": 22, 
                  "driver": "Jenson Button", 
                  "id": 13635, 
                  "position": 4, 
                  "speed": "314.0", 
                  "time_of_day": "13:45:51"
              }, 
              {
                  "car_number": 27, 
                  "driver": "Nico Hulkenberg", 
                  "id": 13636, 
                  "position": 5, 
                  "speed": "313.7", 
                  "time_of_day": "13:51:26"
              }, 
              {
                  "car_number": 19, 
                  "driver": "Felipe Massa", 
                  "id": 13637, 
                  "position": 6, 
                  "speed": "313.3", 
                  "time_of_day": "13:51:59"
              }, 
              {
                  "car_number": 14, 
                  "driver": "Fernando Alonso", 
                  "id": 13638, 
                  "position": 7, 
                  "speed": "312.1", 
                  "time_of_day": "13:25:07"
              }, 
              {
                  "car_number": 3, 
                  "driver": "Daniel Ricciardo", 
                  "id": 13639, 
                  "position": 8, 
                  "speed": "311.9", 
                  "time_of_day": "13:15:07"
              }, 
              {
                  "car_number": 7, 
                  "driver": "Kimi R\u00e4ikk\u00f6nen", 
                  "id": 13640, 
                  "position": 9, 
                  "speed": "310.7", 
                  "time_of_day": "13:49:59"
              }, 
              {
                  "car_number": 11, 
                  "driver": "Sergio Perez", 
                  "id": 13641, 
                  "position": 10, 
                  "speed": "310.2", 
                  "time_of_day": "13:27:43"
              }, 
              {
                  "car_number": 25, 
                  "driver": "Jean-Eric Vergne", 
                  "id": 13642, 
                  "position": 11, 
                  "speed": "307.5", 
                  "time_of_day": "13:59:13"
              }, 
              {
                  "car_number": 6, 
                  "driver": "Nico Rosberg", 
                  "id": 13643, 
                  "position": 12, 
                  "speed": "306.2", 
                  "time_of_day": "12:53:44"
              }, 
              {
                  "car_number": 1, 
                  "driver": "Sebastian Vettel", 
                  "id": 13644, 
                  "position": 13, 
                  "speed": "301.2", 
                  "time_of_day": "13:38:21"
              }, 
              {
                  "car_number": 21, 
                  "driver": "Esteban Gutierrez", 
                  "id": 13645, 
                  "position": 14, 
                  "speed": "294.8", 
                  "time_of_day": "13:09:14"
              }, 
              {
                  "car_number": 99, 
                  "driver": "Adrian Sutil", 
                  "id": 13646, 
                  "position": 15, 
                  "speed": "292.2", 
                  "time_of_day": "13:45:40"
              }, 
              {
                  "car_number": 17, 
                  "driver": "Jules Bianchi", 
                  "id": 13647, 
                  "position": 16, 
                  "speed": "283.8", 
                  "time_of_day": "14:01:41"
              }, 
              {
                  "car_number": 4, 
                  "driver": "Max Chilton", 
                  "id": 13648, 
                  "position": 17, 
                  "speed": "245.7", 
                  "time_of_day": "13:29:41"
              }, 
              {
                  "car_number": 10, 
                  "driver": "Kamui Kobayashi", 
                  "id": 13649, 
                  "position": 18, 
                  "speed": "182.5", 
                  "time_of_day": "12:35:18"
              }, 
              {
                  "car_number": 13, 
                  "driver": "Pastor Maldonado", 
                  "id": 13650, 
                  "position": 19, 
                  "speed": "178.8", 
                  "time_of_day": "13:45:46"
              }, 
              {
                  "car_number": 44, 
                  "driver": "Lewis Hamilton", 
                  "id": 13651, 
                  "position": 20, 
                  "speed": "176.3", 
                  "time_of_day": "12:33:30"
              }, 
              {
                  "car_number": 9, 
                  "driver": "Marcus Ericsson", 
                  "id": 13652, 
                  "position": 21, 
                  "speed": "161.7", 
                  "time_of_day": "12:31:08"
              }
          ]
      }
    )
  });
  app.use('/', speedTrapsRouter);
};
