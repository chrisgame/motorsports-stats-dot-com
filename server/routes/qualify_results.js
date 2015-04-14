module.exports = function(app) {
  var express = require('express');
  var qualifyResultsRouter = express.Router();
  qualifyResultsRouter.get('/qualify_results', function(req, res) {
    res.send(
      {
          "qualify_results": [
              {
                  "car_number": 44, 
                  "driver": "Lewis Hamilton", 
                  "id": 4460, 
                  "laps": 22, 
                  "position": "1", 
                  "q1": "91.699", 
                  "q2": "102.89", 
                  "q3": "104.231", 
                  "qualify_session_id": 207, 
                  "team": "Mercedes", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 3, 
                  "driver": "Daniel Ricciardo", 
                  "id": 4461, 
                  "laps": 20, 
                  "position": "2", 
                  "q1": "90.775", 
                  "q2": "102.295", 
                  "q3": "104.548", 
                  "qualify_session_id": 207, 
                  "team": "Red Bull Racing-Renault", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 6, 
                  "driver": "Nico Rosberg", 
                  "id": 4462, 
                  "laps": 21, 
                  "position": "3", 
                  "q1": "92.564", 
                  "q2": "102.264", 
                  "q3": "104.595", 
                  "qualify_session_id": 207, 
                  "team": "Mercedes", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 20, 
                  "driver": "Kevin Magnussen", 
                  "id": 4463, 
                  "laps": 19, 
                  "position": "4", 
                  "q1": "90.949", 
                  "q2": "103.247", 
                  "q3": "105.745", 
                  "qualify_session_id": 207, 
                  "team": "McLaren-Mercedes", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 14, 
                  "driver": "Fernando Alonso", 
                  "id": 4464, 
                  "laps": 21, 
                  "position": "5", 
                  "q1": "91.388", 
                  "q2": "102.805", 
                  "q3": "105.819", 
                  "qualify_session_id": 207, 
                  "team": "Ferrari", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 25, 
                  "driver": "Jean-Eric Vergne", 
                  "id": 4465, 
                  "laps": 21, 
                  "position": "6", 
                  "q1": "93.488", 
                  "q2": "103.849", 
                  "q3": "105.864", 
                  "qualify_session_id": 207, 
                  "team": "STR-Renault", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 27, 
                  "driver": "Nico Hulkenberg", 
                  "id": 4466, 
                  "laps": 20, 
                  "position": "7", 
                  "q1": "93.893", 
                  "q2": "103.658", 
                  "q3": "106.03", 
                  "qualify_session_id": 207, 
                  "team": "Force India-Mercedes", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 26, 
                  "driver": "Daniil Kvyat", 
                  "id": 4467, 
                  "laps": 20, 
                  "position": "8", 
                  "q1": "93.777", 
                  "q2": "104.331", 
                  "q3": "107.368", 
                  "qualify_session_id": 207, 
                  "team": "STR-Renault", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 19, 
                  "driver": "Felipe Massa", 
                  "id": 4468, 
                  "laps": 21, 
                  "position": "9", 
                  "q1": "91.228", 
                  "q2": "104.242", 
                  "q3": "108.079", 
                  "qualify_session_id": 207, 
                  "team": "Williams-Mercedes", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 77, 
                  "driver": "Valtteri  Bottas", 
                  "id": 4469, 
                  "laps": 19, 
                  "position": "10", 
                  "q1": "91.601", 
                  "q2": "103.852", 
                  "q3": "108.147", 
                  "qualify_session_id": 207, 
                  "team": "Williams-Mercedes", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 22, 
                  "driver": "Jenson Button", 
                  "id": 4470, 
                  "laps": 13, 
                  "position": "11", 
                  "q1": "91.396", 
                  "q2": "104.437", 
                  "q3": "", 
                  "qualify_session_id": 207, 
                  "team": "McLaren-Mercedes", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 7, 
                  "driver": "Kimi R\u00e4ikk\u00f6nen", 
                  "id": 4471, 
                  "laps": 13, 
                  "position": "12", 
                  "q1": "92.439", 
                  "q2": "104.494", 
                  "q3": "", 
                  "qualify_session_id": 207, 
                  "team": "Ferrari", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 1, 
                  "driver": "Sebastian Vettel", 
                  "id": 4472, 
                  "laps": 13, 
                  "position": "13", 
                  "q1": "91.931", 
                  "q2": "104.668", 
                  "q3": "", 
                  "qualify_session_id": 207, 
                  "team": "Red Bull Racing-Renault", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 99, 
                  "driver": "Adrian Sutil", 
                  "id": 4473, 
                  "laps": 12, 
                  "position": "14", 
                  "q1": "93.673", 
                  "q2": "105.655", 
                  "q3": "", 
                  "qualify_session_id": 207, 
                  "team": "Sauber-Ferrari", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 10, 
                  "driver": "Kamui Kobayashi", 
                  "id": 4474, 
                  "laps": 13, 
                  "position": "15", 
                  "q1": "94.274", 
                  "q2": "105.867", 
                  "q3": "", 
                  "qualify_session_id": 207, 
                  "team": "Caterham-Renault", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 11, 
                  "driver": "Sergio Perez", 
                  "id": 4475, 
                  "laps": 13, 
                  "position": "16", 
                  "q1": "94.141", 
                  "q2": "107.293", 
                  "q3": "", 
                  "qualify_session_id": 207, 
                  "team": "Force India-Mercedes", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 4, 
                  "driver": "Max Chilton", 
                  "id": 4476, 
                  "laps": 5, 
                  "position": "17", 
                  "q1": "94.293", 
                  "q2": "", 
                  "q3": "", 
                  "qualify_session_id": 207, 
                  "team": "Marussia-Ferrari", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 17, 
                  "driver": "Jules Bianchi", 
                  "id": 4477, 
                  "laps": 5, 
                  "position": "18", 
                  "q1": "94.794", 
                  "q2": "", 
                  "q3": "", 
                  "qualify_session_id": 207, 
                  "team": "Marussia-Ferrari", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 21, 
                  "driver": "Esteban Gutierrez", 
                  "id": 4478, 
                  "laps": 7, 
                  "position": "19", 
                  "q1": "95.117", 
                  "q2": "", 
                  "q3": "", 
                  "qualify_session_id": 207, 
                  "team": "Sauber-Ferrari", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 9, 
                  "driver": "Marcus Ericsson", 
                  "id": 4479, 
                  "laps": 5, 
                  "position": "20", 
                  "q1": "95.157", 
                  "q2": "", 
                  "q3": "", 
                  "qualify_session_id": 207, 
                  "team": "Caterham-Renault", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 8, 
                  "driver": "Romain Grosjean", 
                  "id": 4480, 
                  "laps": 6, 
                  "position": "21", 
                  "q1": "96.993", 
                  "q2": "", 
                  "q3": "", 
                  "qualify_session_id": 207, 
                  "team": "Lotus-Renault", 
                  "time_or_retirement": null
              }, 
              {
                  "car_number": 13, 
                  "driver": "Pastor Maldonado", 
                  "id": 4481, 
                  "laps": 3, 
                  "position": "22", 
                  "q1": "No time", 
                  "q2": "", 
                  "q3": "", 
                  "qualify_session_id": 207, 
                  "team": "Lotus-Renault", 
                  "time_or_retirement": null
              }
          ]
      }
    )
  });
  app.use('', qualifyResultsRouter);
};