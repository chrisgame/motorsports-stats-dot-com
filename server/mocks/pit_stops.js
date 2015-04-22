module.exports = function(app) {
  var express = require('express');
  var pitStopRouter = express.Router();
  pitStopRouter.get('/pit_stops', function(req, res) {
    res.send(
      {
          "pit_stops": [
              {
                  "car_number": 8,
                  "driver": "Romain Grosjean",
                  "id": 6933,
                  "lap": 1,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Lotus-Renault",
                  "time": "17.255",
                  "time_of_day": "17:09:56",
                  "total_pit_time": "17.255"
              },
              {
                  "car_number": 21,
                  "driver": "Esteban Gutierrez",
                  "id": 6934,
                  "lap": 1,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Sauber-Ferrari",
                  "time": "32.657",
                  "time_of_day": "17:10:12",
                  "total_pit_time": "32.657"
              },
              {
                  "car_number": 11,
                  "driver": "Sergio Perez",
                  "id": 6935,
                  "lap": 1,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Force India-Mercedes",
                  "time": "25.541",
                  "time_of_day": "17:10:14",
                  "total_pit_time": "25.541"
              },
              {
                  "car_number": 77,
                  "driver": "Valtteri  Bottas",
                  "id": 6936,
                  "lap": 10,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Williams-Mercedes",
                  "time": "34.921",
                  "time_of_day": "17:24:46",
                  "total_pit_time": "34.921"
              },
              {
                  "car_number": 22,
                  "driver": "Jenson Button",
                  "id": 6937,
                  "lap": 11,
                  "race_id": 898,
                  "stops": 1,
                  "team": "McLaren-Mercedes",
                  "time": "22.411",
                  "time_of_day": "17:26:02",
                  "total_pit_time": "22.411"
              },
              {
                  "car_number": 11,
                  "driver": "Sergio Perez",
                  "id": 6938,
                  "lap": 11,
                  "race_id": 898,
                  "stops": 2,
                  "team": "Force India-Mercedes",
                  "time": "22.497",
                  "time_of_day": "17:27:03",
                  "total_pit_time": "48.038"
              },
              {
                  "car_number": 6,
                  "driver": "Nico Rosberg",
                  "id": 6939,
                  "lap": 12,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Mercedes",
                  "time": "24.331",
                  "time_of_day": "17:27:27",
                  "total_pit_time": "24.331"
              },
              {
                  "car_number": 3,
                  "driver": "Daniel Ricciardo",
                  "id": 6940,
                  "lap": 12,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Red Bull Racing-Renault",
                  "time": "22.994",
                  "time_of_day": "17:27:37",
                  "total_pit_time": "22.994"
              },
              {
                  "car_number": 20,
                  "driver": "Kevin Magnussen",
                  "id": 6941,
                  "lap": 12,
                  "race_id": 898,
                  "stops": 1,
                  "team": "McLaren-Mercedes",
                  "time": "23.15",
                  "time_of_day": "17:27:45",
                  "total_pit_time": "23.15"
              },
              {
                  "car_number": 27,
                  "driver": "Nico Hulkenberg",
                  "id": 6942,
                  "lap": 12,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Force India-Mercedes",
                  "time": "22.615",
                  "time_of_day": "17:27:51",
                  "total_pit_time": "22.615"
              },
              {
                  "car_number": 14,
                  "driver": "Fernando Alonso",
                  "id": 6943,
                  "lap": 12,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Ferrari",
                  "time": "22.887",
                  "time_of_day": "17:27:55",
                  "total_pit_time": "22.887"
              },
              {
                  "car_number": 7,
                  "driver": "Kimi R\u00e4ikk\u00f6nen",
                  "id": 6944,
                  "lap": 12,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Ferrari",
                  "time": "25.543",
                  "time_of_day": "17:28:02",
                  "total_pit_time": "25.543"
              },
              {
                  "car_number": 25,
                  "driver": "Jean-Eric Vergne",
                  "id": 6945,
                  "lap": 12,
                  "race_id": 898,
                  "stops": 1,
                  "team": "STR-Renault",
                  "time": "23.124",
                  "time_of_day": "17:28:02",
                  "total_pit_time": "23.124"
              },
              {
                  "car_number": 26,
                  "driver": "Daniil Kvyat",
                  "id": 6946,
                  "lap": 12,
                  "race_id": 898,
                  "stops": 1,
                  "team": "STR-Renault",
                  "time": "30.514",
                  "time_of_day": "17:28:03",
                  "total_pit_time": "30.514"
              },
              {
                  "car_number": 9,
                  "driver": "Marcus Ericsson",
                  "id": 6947,
                  "lap": 23,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Caterham-Renault",
                  "time": "23.238",
                  "time_of_day": "17:48:18",
                  "total_pit_time": "23.238"
              },
              {
                  "car_number": 4,
                  "driver": "Max Chilton",
                  "id": 6948,
                  "lap": 24,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Marussia-Ferrari",
                  "time": "24.209",
                  "time_of_day": "17:49:56",
                  "total_pit_time": "24.209"
              },
              {
                  "car_number": 17,
                  "driver": "Jules Bianchi",
                  "id": 6949,
                  "lap": 20,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Marussia-Ferrari",
                  "time": "23.821",
                  "time_of_day": "17:54:48",
                  "total_pit_time": "23.821"
              },
              {
                  "car_number": 8,
                  "driver": "Romain Grosjean",
                  "id": 6950,
                  "lap": 28,
                  "race_id": 898,
                  "stops": 2,
                  "team": "Lotus-Renault",
                  "time": "22.264",
                  "time_of_day": "17:56:08",
                  "total_pit_time": "39.519"
              },
              {
                  "car_number": 13,
                  "driver": "Pastor Maldonado",
                  "id": 6951,
                  "lap": 29,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Lotus-Renault",
                  "time": "22.847",
                  "time_of_day": "17:57:57",
                  "total_pit_time": "22.847"
              },
              {
                  "car_number": 21,
                  "driver": "Esteban Gutierrez",
                  "id": 6952,
                  "lap": 30,
                  "race_id": 898,
                  "stops": 2,
                  "team": "Sauber-Ferrari",
                  "time": "23.797",
                  "time_of_day": "17:59:29",
                  "total_pit_time": "56.454"
              },
              {
                  "car_number": 22,
                  "driver": "Jenson Button",
                  "id": 6953,
                  "lap": 32,
                  "race_id": 898,
                  "stops": 2,
                  "team": "McLaren-Mercedes",
                  "time": "22.399",
                  "time_of_day": "18:02:01",
                  "total_pit_time": "44.81"
              },
              {
                  "car_number": 11,
                  "driver": "Sergio Perez",
                  "id": 6954,
                  "lap": 32,
                  "race_id": 898,
                  "stops": 3,
                  "team": "Force India-Mercedes",
                  "time": "22.526",
                  "time_of_day": "18:02:29",
                  "total_pit_time": "70.564"
              },
              {
                  "car_number": 27,
                  "driver": "Nico Hulkenberg",
                  "id": 6955,
                  "lap": 33,
                  "race_id": 898,
                  "stops": 2,
                  "team": "Force India-Mercedes",
                  "time": "22.933",
                  "time_of_day": "18:03:36",
                  "total_pit_time": "45.548"
              },
              {
                  "car_number": 25,
                  "driver": "Jean-Eric Vergne",
                  "id": 6956,
                  "lap": 33,
                  "race_id": 898,
                  "stops": 2,
                  "team": "STR-Renault",
                  "time": "22.978",
                  "time_of_day": "18:03:39",
                  "total_pit_time": "46.102"
              },
              {
                  "car_number": 14,
                  "driver": "Fernando Alonso",
                  "id": 6957,
                  "lap": 35,
                  "race_id": 898,
                  "stops": 2,
                  "team": "Ferrari",
                  "time": "21.978",
                  "time_of_day": "18:06:45",
                  "total_pit_time": "44.865"
              },
              {
                  "car_number": 99,
                  "driver": "Adrian Sutil",
                  "id": 6958,
                  "lap": 35,
                  "race_id": 898,
                  "stops": 1,
                  "team": "Sauber-Ferrari",
                  "time": "24.305",
                  "time_of_day": "18:07:21",
                  "total_pit_time": "24.305"
              },
              {
                  "car_number": 3,
                  "driver": "Daniel Ricciardo",
                  "id": 6959,
                  "lap": 36,
                  "race_id": 898,
                  "stops": 2,
                  "team": "Red Bull Racing-Renault",
                  "time": "22.427",
                  "time_of_day": "18:08:06",
                  "total_pit_time": "45.421"
              },
              {
                  "car_number": 77,
                  "driver": "Valtteri  Bottas",
                  "id": 6960,
                  "lap": 36,
                  "race_id": 898,
                  "stops": 2,
                  "team": "Williams-Mercedes",
                  "time": "23.117",
                  "time_of_day": "18:08:28",
                  "total_pit_time": "58.038"
              },
              {
                  "car_number": 7,
                  "driver": "Kimi R\u00e4ikk\u00f6nen",
                  "id": 6961,
                  "lap": 36,
                  "race_id": 898,
                  "stops": 2,
                  "team": "Ferrari",
                  "time": "21.825",
                  "time_of_day": "18:08:30",
                  "total_pit_time": "47.368"
              },
              {
                  "car_number": 26,
                  "driver": "Daniil Kvyat",
                  "id": 6962,
                  "lap": 36,
                  "race_id": 898,
                  "stops": 2,
                  "team": "STR-Renault",
                  "time": "23.92",
                  "time_of_day": "18:08:31",
                  "total_pit_time": "54.434"
              },
              {
                  "car_number": 20,
                  "driver": "Kevin Magnussen",
                  "id": 6963,
                  "lap": 37,
                  "race_id": 898,
                  "stops": 2,
                  "team": "McLaren-Mercedes",
                  "time": "22.273",
                  "time_of_day": "18:09:47",
                  "total_pit_time": "45.423"
              },
              {
                  "car_number": 6,
                  "driver": "Nico Rosberg",
                  "id": 6964,
                  "lap": 38,
                  "race_id": 898,
                  "stops": 2,
                  "team": "Mercedes",
                  "time": "23.673",
                  "time_of_day": "18:10:59",
                  "total_pit_time": "48.004"
              },
              {
                  "car_number": 4,
                  "driver": "Max Chilton",
                  "id": 6965,
                  "lap": 41,
                  "race_id": 898,
                  "stops": 2,
                  "team": "Marussia-Ferrari",
                  "time": "23.493",
                  "time_of_day": "18:18:13",
                  "total_pit_time": "47.702"
              },
              {
                  "car_number": 17,
                  "driver": "Jules Bianchi",
                  "id": 6966,
                  "lap": 35,
                  "race_id": 898,
                  "stops": 2,
                  "team": "Marussia-Ferrari",
                  "time": "22.656",
                  "time_of_day": "18:19:32",
                  "total_pit_time": "46.477"
              }
          ]
      }
    )
  });
  app.use('/', pitStopRouter);
};
