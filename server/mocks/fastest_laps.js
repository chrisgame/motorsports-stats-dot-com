module.exports = function(app) {
  var express = require('express');
  var fastestLapsRouter = express.Router();
  fastestLapsRouter.get('/fastest_laps', function(req, res) {
    res.send(
      {
          "fastest_laps": [
              {
                  "average_speed": "206.436", 
                  "car_number": 6, 
                  "driver": "Nico Rosberg", 
                  "id": 4557, 
                  "lap": "19", 
                  "position": 1, 
                  "race_id": 898, 
                  "team": "Mercedes", 
                  "time": "92.478", 
                  "time_of_day": "17:41:08"
              }, 
              {
                  "average_speed": "206.235", 
                  "car_number": 77, 
                  "driver": "Valtteri  Bottas", 
                  "id": 4558, 
                  "lap": "56", 
                  "position": 2, 
                  "race_id": 898, 
                  "team": "Williams-Mercedes", 
                  "time": "92.568", 
                  "time_of_day": "18:40:12"
              }, 
              {
                  "average_speed": "206.128", 
                  "car_number": 14, 
                  "driver": "Fernando Alonso", 
                  "id": 4559, 
                  "lap": "56", 
                  "position": 3, 
                  "race_id": 898, 
                  "team": "Ferrari", 
                  "time": "92.616", 
                  "time_of_day": "18:39:59"
              }, 
              {
                  "average_speed": "206.088", 
                  "car_number": 26, 
                  "driver": "Daniil Kvyat", 
                  "id": 4560, 
                  "lap": "38", 
                  "position": 4, 
                  "race_id": 898, 
                  "team": "STR-Renault", 
                  "time": "92.634", 
                  "time_of_day": "18:12:04"
              }, 
              {
                  "average_speed": "205.460", 
                  "car_number": 20, 
                  "driver": "Kevin Magnussen", 
                  "id": 4561, 
                  "lap": "39", 
                  "position": 5, 
                  "race_id": 898, 
                  "team": "McLaren-Mercedes", 
                  "time": "92.917", 
                  "time_of_day": "18:13:18"
              }, 
              {
                  "average_speed": "205.131", 
                  "car_number": 3, 
                  "driver": "Daniel Ricciardo", 
                  "id": 4562, 
                  "lap": "49", 
                  "position": 6, 
                  "race_id": 898, 
                  "team": "Red Bull Racing-Renault", 
                  "time": "93.066", 
                  "time_of_day": "18:28:56"
              }, 
              {
                  "average_speed": "204.867", 
                  "car_number": 22, 
                  "driver": "Jenson Button", 
                  "id": 4563, 
                  "lap": "57", 
                  "position": 7, 
                  "race_id": 898, 
                  "team": "McLaren-Mercedes", 
                  "time": "93.186", 
                  "time_of_day": "18:41:29"
              }, 
              {
                  "average_speed": "204.814", 
                  "car_number": 27, 
                  "driver": "Nico Hulkenberg", 
                  "id": 4564, 
                  "lap": "56", 
                  "position": 8, 
                  "race_id": 898, 
                  "team": "Force India-Mercedes", 
                  "time": "93.21", 
                  "time_of_day": "18:40:16"
              }, 
              {
                  "average_speed": "204.472", 
                  "car_number": 11, 
                  "driver": "Sergio Perez", 
                  "id": 4565, 
                  "lap": "34", 
                  "position": 9, 
                  "race_id": 898, 
                  "team": "Force India-Mercedes", 
                  "time": "93.366", 
                  "time_of_day": "18:06:02"
              }, 
              {
                  "average_speed": "203.763", 
                  "car_number": 7, 
                  "driver": "Kimi R\u00e4ikk\u00f6nen", 
                  "id": 4566, 
                  "lap": "56", 
                  "position": 10, 
                  "race_id": 898, 
                  "team": "Ferrari", 
                  "time": "93.691", 
                  "time_of_day": "18:40:22"
              }, 
              {
                  "average_speed": "203.387", 
                  "car_number": 25, 
                  "driver": "Jean-Eric Vergne", 
                  "id": 4567, 
                  "lap": "35", 
                  "position": 11, 
                  "race_id": 898, 
                  "team": "STR-Renault", 
                  "time": "93.864", 
                  "time_of_day": "18:07:13"
              }, 
              {
                  "average_speed": "202.658", 
                  "car_number": 21, 
                  "driver": "Esteban Gutierrez", 
                  "id": 4568, 
                  "lap": "33", 
                  "position": 12, 
                  "race_id": 898, 
                  "team": "Sauber-Ferrari", 
                  "time": "94.202", 
                  "time_of_day": "18:04:43"
              }, 
              {
                  "average_speed": "201.882", 
                  "car_number": 99, 
                  "driver": "Adrian Sutil", 
                  "id": 4569, 
                  "lap": "41", 
                  "position": 13, 
                  "race_id": 898, 
                  "team": "Sauber-Ferrari", 
                  "time": "94.564", 
                  "time_of_day": "18:17:21"
              }, 
              {
                  "average_speed": "201.451", 
                  "car_number": 8, 
                  "driver": "Romain Grosjean", 
                  "id": 4570, 
                  "lap": "30", 
                  "position": 14, 
                  "race_id": 898, 
                  "team": "Lotus-Renault", 
                  "time": "94.766", 
                  "time_of_day": "17:59:44"
              }, 
              {
                  "average_speed": "200.363", 
                  "car_number": 17, 
                  "driver": "Jules Bianchi", 
                  "id": 4571, 
                  "lap": "41", 
                  "position": 15, 
                  "race_id": 898, 
                  "team": "Marussia-Ferrari", 
                  "time": "95.281", 
                  "time_of_day": "18:29:40"
              }, 
              {
                  "average_speed": "199.621", 
                  "car_number": 4, 
                  "driver": "Max Chilton", 
                  "id": 4572, 
                  "lap": "55", 
                  "position": 16, 
                  "race_id": 898, 
                  "team": "Marussia-Ferrari", 
                  "time": "95.635", 
                  "time_of_day": "18:41:21"
              }, 
              {
                  "average_speed": "196.682", 
                  "car_number": 9, 
                  "driver": "Marcus Ericsson", 
                  "id": 4573, 
                  "lap": "26", 
                  "position": 17, 
                  "race_id": 898, 
                  "team": "Caterham-Renault", 
                  "time": "97.064", 
                  "time_of_day": "17:53:36"
              }, 
              {
                  "average_speed": "196.141", 
                  "car_number": 13, 
                  "driver": "Pastor Maldonado", 
                  "id": 4574, 
                  "lap": "17", 
                  "position": 18, 
                  "race_id": 898, 
                  "team": "Lotus-Renault", 
                  "time": "97.332", 
                  "time_of_day": "17:38:16"
              }, 
              {
                  "average_speed": "190.361", 
                  "car_number": 44, 
                  "driver": "Lewis Hamilton", 
                  "id": 4575, 
                  "lap": "2", 
                  "position": 19, 
                  "race_id": 898, 
                  "team": "Mercedes", 
                  "time": "100.287", 
                  "time_of_day": "17:11:27"
              }, 
              {
                  "average_speed": "173.636", 
                  "car_number": 1, 
                  "driver": "Sebastian Vettel", 
                  "id": 4576, 
                  "lap": "2", 
                  "position": 20, 
                  "race_id": 898, 
                  "team": "Red Bull Racing-Renault", 
                  "time": "109.947", 
                  "time_of_day": "17:11:51"
              }
          ]
      }
    )
  });
  app.use('/', fastestLapsRouter);
};
