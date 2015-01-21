module.exports = function(app) {
  var express = require('express');
  var practiceResultsRouter = express.Router();
  practiceResultsRouter.get('/practice_results', function(req, res) {
    res.send(
      {
          "practice_results": [
              {
                  "car_number": 14,
                  "driver": "Fernando Alonso",
                  "gap": "",
                  "id": 12264,
                  "laps": 20,
                  "position": "1",
                  "practice_session_id": 540,
                  "team": "Ferrari",
                  "time_or_retirement": "91.84"
              },
              {
                  "car_number": 22,
                  "driver": "Jenson Button",
                  "gap": "0.517",
                  "id": 12265,
                  "laps": 23,
                  "position": "2",
                  "practice_session_id": 540,
                  "team": "McLaren-Mercedes",
                  "time_or_retirement": "92.357"
              },
              {
                  "car_number": 77,
                  "driver": "Valtteri  Bottas",
                  "gap": "0.563",
                  "id": 12266,
                  "laps": 27,
                  "position": "3",
                  "practice_session_id": 540,
                  "team": "Williams-Mercedes",
                  "time_or_retirement": "92.403"
              },
              {
                  "car_number": 19,
                  "driver": "Felipe Massa",
                  "gap": "0.591",
                  "id": 12267,
                  "laps": 19,
                  "position": "4",
                  "practice_session_id": 540,
                  "team": "Williams-Mercedes",
                  "time_or_retirement": "92.431"
              },
              {
                  "car_number": 3,
                  "driver": "Daniel Ricciardo",
                  "gap": "0.759",
                  "id": 12268,
                  "laps": 26,
                  "position": "5",
                  "practice_session_id": 540,
                  "team": "Red Bull Racing-Renault",
                  "time_or_retirement": "92.599"
              },
              {
                  "car_number": 6,
                  "driver": "Nico Rosberg",
                  "gap": "0.764",
                  "id": 12269,
                  "laps": 17,
                  "position": "6",
                  "practice_session_id": 540,
                  "team": "Mercedes",
                  "time_or_retirement": "92.604"
              },
              {
                  "car_number": 1,
                  "driver": "Sebastian Vettel",
                  "gap": "0.953",
                  "id": 12270,
                  "laps": 10,
                  "position": "7",
                  "practice_session_id": 540,
                  "team": "Red Bull Racing-Renault",
                  "time_or_retirement": "92.793"
              },
              {
                  "car_number": 20,
                  "driver": "Kevin Magnussen",
                  "gap": "1.007",
                  "id": 12271,
                  "laps": 28,
                  "position": "8",
                  "practice_session_id": 540,
                  "team": "McLaren-Mercedes",
                  "time_or_retirement": "92.847"
              },
              {
                  "car_number": 7,
                  "driver": "Kimi R\u00e4ikk\u00f6nen",
                  "gap": "1.137",
                  "id": 12272,
                  "laps": 19,
                  "position": "9",
                  "practice_session_id": 540,
                  "team": "Ferrari",
                  "time_or_retirement": "92.977"
              },
              {
                  "car_number": 25,
                  "driver": "Jean-Eric Vergne",
                  "gap": "1.606",
                  "id": 12273,
                  "laps": 30,
                  "position": "10",
                  "practice_session_id": 540,
                  "team": "STR-Renault",
                  "time_or_retirement": "93.446"
              },
              {
                  "car_number": 27,
                  "driver": "Nico Hulkenberg",
                  "gap": "1.693",
                  "id": 12274,
                  "laps": 23,
                  "position": "11",
                  "practice_session_id": 540,
                  "team": "Force India-Mercedes",
                  "time_or_retirement": "93.533"
              },
              {
                  "car_number": 11,
                  "driver": "Sergio Perez",
                  "gap": "2.015",
                  "id": 12275,
                  "laps": 24,
                  "position": "12",
                  "practice_session_id": 540,
                  "team": "Force India-Mercedes",
                  "time_or_retirement": "93.855"
              },
              {
                  "car_number": 26,
                  "driver": "Daniil Kvyat",
                  "gap": "2.432",
                  "id": 12276,
                  "laps": 27,
                  "position": "13",
                  "practice_session_id": 540,
                  "team": "STR-Renault",
                  "time_or_retirement": "94.272"
              },
              {
                  "car_number": 21,
                  "driver": "Esteban Gutierrez",
                  "gap": "3.738",
                  "id": 12277,
                  "laps": 7,
                  "position": "14",
                  "practice_session_id": 540,
                  "team": "Sauber-Ferrari",
                  "time_or_retirement": "95.578"
              },
              {
                  "car_number": 99,
                  "driver": "Adrian Sutil",
                  "gap": "4.605",
                  "id": 12278,
                  "laps": 13,
                  "position": "15",
                  "practice_session_id": 540,
                  "team": "Sauber-Ferrari",
                  "time_or_retirement": "96.445"
              },
              {
                  "car_number": 17,
                  "driver": "Jules Bianchi",
                  "gap": "9.019",
                  "id": 12279,
                  "laps": 6,
                  "position": "16",
                  "practice_session_id": 540,
                  "team": "Marussia-Ferrari",
                  "time_or_retirement": "100.859"
              },
              {
                  "car_number": 4,
                  "driver": "Max Chilton",
                  "gap": "15.082",
                  "id": 12280,
                  "laps": 4,
                  "position": "17",
                  "practice_session_id": 540,
                  "team": "Marussia-Ferrari",
                  "time_or_retirement": "106.922"
              },
              {
                  "car_number": 9,
                  "driver": "Marcus Ericsson",
                  "gap": "",
                  "id": 12281,
                  "laps": 1,
                  "position": "18",
                  "practice_session_id": 540,
                  "team": "Caterham-Renault",
                  "time_or_retirement": "No time"
              },
              {
                  "car_number": 44,
                  "driver": "Lewis Hamilton",
                  "gap": "",
                  "id": 12282,
                  "laps": 1,
                  "position": "19",
                  "practice_session_id": 540,
                  "team": "Mercedes",
                  "time_or_retirement": "No time"
              },
              {
                  "car_number": 10,
                  "driver": "Kamui Kobayashi",
                  "gap": "",
                  "id": 12283,
                  "laps": 1,
                  "position": "20",
                  "practice_session_id": 540,
                  "team": "Caterham-Renault",
                  "time_or_retirement": "No time"
              },
              {
                  "car_number": 13,
                  "driver": "Pastor Maldonado",
                  "gap": "",
                  "id": 12284,
                  "laps": 2,
                  "position": "21",
                  "practice_session_id": 540,
                  "team": "Lotus-Renault",
                  "time_or_retirement": "No time"
              },
              {
                  "car_number": 8,
                  "driver": "Romain Grosjean",
                  "gap": "",
                  "id": 12285,
                  "laps": "",
                  "position": "22",
                  "practice_session_id": 540,
                  "team": "Lotus-Renault",
                  "time_or_retirement": "No time"
              }
          ]
      }
    )
  });
  app.use('/', practiceResultsRouter);
};
