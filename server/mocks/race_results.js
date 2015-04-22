module.exports = function(app) {
  var express = require('express');
  var raceResultsRouter = express.Router();
  raceResultsRouter.get('/race_results', function(req, res) {
    res.send(
      {
          "race_results": [
              {
                  "car_number": 6,
                  "driver": "Nico Rosberg",
                  "grid": "3",
                  "id": 21838,
                  "laps": 57,
                  "points": "25.0",
                  "position": "1",
                  "team": "Mercedes",
                  "time_or_retirement": "5578.71"
              },
              {
                  "car_number": 20,
                  "driver": "Kevin Magnussen",
                  "grid": "4",
                  "id": 21839,
                  "laps": 57,
                  "points": "18.0",
                  "position": "2",
                  "team": "McLaren-Mercedes",
                  "time_or_retirement": "+26.7 secs"
              },
              {
                  "car_number": 22,
                  "driver": "Jenson Button",
                  "grid": "10",
                  "id": 21840,
                  "laps": 57,
                  "points": "15.0",
                  "position": "3",
                  "team": "McLaren-Mercedes",
                  "time_or_retirement": "+30.0 secs"
              },
              {
                  "car_number": 14,
                  "driver": "Fernando Alonso",
                  "grid": "5",
                  "id": 21841,
                  "laps": 57,
                  "points": "12.0",
                  "position": "4",
                  "team": "Ferrari",
                  "time_or_retirement": "+35.2 secs"
              },
              {
                  "car_number": 77,
                  "driver": "Valtteri  Bottas",
                  "grid": "15",
                  "id": 21842,
                  "laps": 57,
                  "points": "10.0",
                  "position": "5",
                  "team": "Williams-Mercedes",
                  "time_or_retirement": "+47.6 secs"
              },
              {
                  "car_number": 27,
                  "driver": "Nico Hulkenberg",
                  "grid": "7",
                  "id": 21843,
                  "laps": 57,
                  "points": "8.0",
                  "position": "6",
                  "team": "Force India-Mercedes",
                  "time_or_retirement": "+50.7 secs"
              },
              {
                  "car_number": 7,
                  "driver": "Kimi R\u00e4ikk\u00f6nen",
                  "grid": "11",
                  "id": 21844,
                  "laps": 57,
                  "points": "6.0",
                  "position": "7",
                  "team": "Ferrari",
                  "time_or_retirement": "+57.6 secs"
              },
              {
                  "car_number": 25,
                  "driver": "Jean-Eric Vergne",
                  "grid": "6",
                  "id": 21845,
                  "laps": 57,
                  "points": "4.0",
                  "position": "8",
                  "team": "STR-Renault",
                  "time_or_retirement": "+60.4 secs"
              },
              {
                  "car_number": 26,
                  "driver": "Daniil Kvyat",
                  "grid": "8",
                  "id": 21846,
                  "laps": 57,
                  "points": "2.0",
                  "position": "9",
                  "team": "STR-Renault",
                  "time_or_retirement": "+63.5 secs"
              },
              {
                  "car_number": 11,
                  "driver": "Sergio Perez",
                  "grid": "16",
                  "id": 21847,
                  "laps": 57,
                  "points": "1.0",
                  "position": "10",
                  "team": "Force India-Mercedes",
                  "time_or_retirement": "+85.9 secs"
              },
              {
                  "car_number": 99,
                  "driver": "Adrian Sutil",
                  "grid": "13",
                  "id": 21848,
                  "laps": 56,
                  "points": "0.0",
                  "position": "11",
                  "team": "Sauber-Ferrari",
                  "time_or_retirement": "+1 Lap"
              },
              {
                  "car_number": 21,
                  "driver": "Esteban Gutierrez",
                  "grid": "20",
                  "id": 21849,
                  "laps": 56,
                  "points": "0.0",
                  "position": "12",
                  "team": "Sauber-Ferrari",
                  "time_or_retirement": "+1 Lap"
              },
              {
                  "car_number": 4,
                  "driver": "Max Chilton",
                  "grid": "17",
                  "id": 21850,
                  "laps": 55,
                  "points": "0.0",
                  "position": "13",
                  "team": "Marussia-Ferrari",
                  "time_or_retirement": "+2 Laps"
              },
              {
                  "car_number": 3,
                  "driver": "Daniel Ricciardo",
                  "grid": "2",
                  "id": 21851,
                  "laps": 57,
                  "points": "0.0",
                  "position": "DSQ",
                  "team": "Red Bull Racing-Renault",
                  "time_or_retirement": "+24.5 secs"
              },
              {
                  "car_number": 17,
                  "driver": "Jules Bianchi",
                  "grid": "18",
                  "id": 21852,
                  "laps": 49,
                  "points": "0.0",
                  "position": "NC",
                  "team": "Marussia-Ferrari",
                  "time_or_retirement": "+8 Laps"
              },
              {
                  "car_number": 8,
                  "driver": "Romain Grosjean",
                  "grid": "22",
                  "id": 21853,
                  "laps": 43,
                  "points": "0.0",
                  "position": "Ret",
                  "team": "Lotus-Renault",
                  "time_or_retirement": "ERS"
              },
              {
                  "car_number": 13,
                  "driver": "Pastor Maldonado",
                  "grid": "21",
                  "id": 21854,
                  "laps": 29,
                  "points": "0.0",
                  "position": "Ret",
                  "team": "Lotus-Renault",
                  "time_or_retirement": "ERS"
              },
              {
                  "car_number": 9,
                  "driver": "Marcus Ericsson",
                  "grid": "19",
                  "id": 21855,
                  "laps": 27,
                  "points": "0.0",
                  "position": "Ret",
                  "team": "Caterham-Renault",
                  "time_or_retirement": "Oil pressure"
              },
              {
                  "car_number": 1,
                  "driver": "Sebastian Vettel",
                  "grid": "12",
                  "id": 21856,
                  "laps": 3,
                  "points": "0.0",
                  "position": "Ret",
                  "team": "Red Bull Racing-Renault",
                  "time_or_retirement": "Power unit"
              },
              {
                  "car_number": 44,
                  "driver": "Lewis Hamilton",
                  "grid": "1",
                  "id": 21857,
                  "laps": 2,
                  "points": "0.0",
                  "position": "Ret",
                  "team": "Mercedes",
                  "time_or_retirement": "Engine"
              },
              {
                  "car_number": 19,
                  "driver": "Felipe Massa",
                  "grid": "9",
                  "id": 21858,
                  "laps": 0,
                  "points": "0.0",
                  "position": "Ret",
                  "team": "Williams-Mercedes",
                  "time_or_retirement": "Accident"
              },
              {
                  "car_number": 10,
                  "driver": "Kamui Kobayashi",
                  "grid": "14",
                  "id": 21859,
                  "laps": 0,
                  "points": "0.0",
                  "position": "Ret",
                  "team": "Caterham-Renault",
                  "time_or_retirement": "Accident"
              }
          ]
      }
    )
  });
  app.use('/', raceResultsRouter);
};
