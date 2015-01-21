module.exports = function(app) {
  var express = require('express');
  var roundRouter = express.Router();
  roundRouter.get('/rounds/*', function(req, res) {
    res.send(
      {
          "rounds": [
              {
                  "date": "2014-03-16",
                  "id": 898,
                  "name": "Australia",
                  "practice_id": 898,
                  "qualify_id": 898,
                  "race_id": 898
              },
              {
                  "date": "2014-03-30",
                  "id": 899,
                  "name": "Malaysia",
                  "practice_id": 899,
                  "qualify_id": 899,
                  "race_id": 899
              },
              {
                  "date": "2014-04-06",
                  "id": 900,
                  "name": "Bahrain",
                  "practice_id": 900,
                  "qualify_id": 900,
                  "race_id": 900
              },
              {
                  "date": "2014-04-20",
                  "id": 901,
                  "name": "China",
                  "practice_id": 901,
                  "qualify_id": 901,
                  "race_id": 901
              },
              {
                  "date": "2014-05-11",
                  "id": 902,
                  "name": "Spain",
                  "practice_id": 902,
                  "qualify_id": 902,
                  "race_id": 902
              },
              {
                  "date": "2014-05-25",
                  "id": 903,
                  "name": "Monaco",
                  "practice_id": 903,
                  "qualify_id": 903,
                  "race_id": 903
              },
              {
                  "date": "2014-06-08",
                  "id": 904,
                  "name": "Canada",
                  "practice_id": 904,
                  "qualify_id": 904,
                  "race_id": 904
              },
              {
                  "date": "2014-06-22",
                  "id": 905,
                  "name": "Austria",
                  "practice_id": 905,
                  "qualify_id": 905,
                  "race_id": 905
              },
              {
                  "date": "2014-07-06",
                  "id": 906,
                  "name": "Great Britain",
                  "practice_id": 906,
                  "qualify_id": 906,
                  "race_id": 906
              },
              {
                  "date": "2014-07-20",
                  "id": 907,
                  "name": "Germany",
                  "practice_id": 907,
                  "qualify_id": 907,
                  "race_id": 907
              },
              {
                  "date": "2014-07-27",
                  "id": 908,
                  "name": "Hungary",
                  "practice_id": 908,
                  "qualify_id": 908,
                  "race_id": 908
              },
              {
                  "date": "2014-08-24",
                  "id": 909,
                  "name": "Belgium",
                  "practice_id": 909,
                  "qualify_id": 909,
                  "race_id": 909
              },
              {
                  "date": "2014-09-07",
                  "id": 910,
                  "name": "Italy",
                  "practice_id": 910,
                  "qualify_id": 910,
                  "race_id": 910
              },
              {
                  "date": "2014-09-21",
                  "id": 911,
                  "name": "Singapore",
                  "practice_id": 911,
                  "qualify_id": 911,
                  "race_id": 911
              },
              {
                  "date": "2014-10-05",
                  "id": 912,
                  "name": "Japan",
                  "practice_id": 912,
                  "qualify_id": 912,
                  "race_id": 912
              },
              {
                  "date": "2014-10-12",
                  "id": 913,
                  "name": "Russia",
                  "practice_id": 913,
                  "qualify_id": 913,
                  "race_id": 913
              },
              {
                  "date": "2014-11-02",
                  "id": 914,
                  "name": "United States",
                  "practice_id": 914,
                  "qualify_id": 914,
                  "race_id": 914
              },
              {
                  "date": "2014-11-09",
                  "id": 915,
                  "name": "Brazil",
                  "practice_id": 915,
                  "qualify_id": 915,
                  "race_id": 915
              },
              {
                  "date": "2014-11-23",
                  "id": 916,
                  "name": "Abu Dhabi",
                  "practice_id": 916,
                  "qualify_id": 916,
                  "race_id": 916
              }
          ]
      }
    );
  });
  app.use('/', roundRouter);
};
