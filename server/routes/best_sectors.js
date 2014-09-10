module.exports = function(app) {
  var express = require('express');
  var bestSectorsRouter = express.Router();
  bestSectorsRouter.get('/best_sectors', function(req, res) {
    res.send(
      {
          "best_sectors": [
              {
                  "car_number": 14, 
                  "driver": "Fernando Alonso", 
                  "id": 40772, 
                  "position": 1, 
                  "sector": "1", 
                  "time": "30.46"
              }, 
              {
                  "car_number": 19, 
                  "driver": "Felipe Massa", 
                  "id": 40773, 
                  "position": 2, 
                  "sector": "1", 
                  "time": "30.68"
              }, 
              {
                  "car_number": 22, 
                  "driver": "Jenson Button", 
                  "id": 40774, 
                  "position": 3, 
                  "sector": "1", 
                  "time": "30.696"
              }, 
              {
                  "car_number": 77, 
                  "driver": "Valtteri  Bottas", 
                  "id": 40775, 
                  "position": 4, 
                  "sector": "1", 
                  "time": "30.769"
              }, 
              {
                  "car_number": 20, 
                  "driver": "Kevin Magnussen", 
                  "id": 40776, 
                  "position": 5, 
                  "sector": "1", 
                  "time": "30.776"
              }, 
              {
                  "car_number": 1, 
                  "driver": "Sebastian Vettel", 
                  "id": 40777, 
                  "position": 6, 
                  "sector": "1", 
                  "time": "30.801"
              }, 
              {
                  "car_number": 3, 
                  "driver": "Daniel Ricciardo", 
                  "id": 40778, 
                  "position": 7, 
                  "sector": "1", 
                  "time": "30.904"
              }, 
              {
                  "car_number": 25, 
                  "driver": "Jean-Eric Vergne", 
                  "id": 40779, 
                  "position": 8, 
                  "sector": "1", 
                  "time": "30.982"
              }, 
              {
                  "car_number": 6, 
                  "driver": "Nico Rosberg", 
                  "id": 40780, 
                  "position": 9, 
                  "sector": "1", 
                  "time": "31.005"
              }, 
              {
                  "car_number": 7, 
                  "driver": "Kimi R\u00e4ikk\u00f6nen", 
                  "id": 40781, 
                  "position": 10, 
                  "sector": "1", 
                  "time": "31.041"
              }, 
              {
                  "car_number": 11, 
                  "driver": "Sergio Perez", 
                  "id": 40782, 
                  "position": 11, 
                  "sector": "1", 
                  "time": "31.156"
              }, 
              {
                  "car_number": 27, 
                  "driver": "Nico Hulkenberg", 
                  "id": 40783, 
                  "position": 12, 
                  "sector": "1", 
                  "time": "31.251"
              }, 
              {
                  "car_number": 26, 
                  "driver": "Daniil Kvyat", 
                  "id": 40784, 
                  "position": 13, 
                  "sector": "1", 
                  "time": "31.448"
              }, 
              {
                  "car_number": 21, 
                  "driver": "Esteban Gutierrez", 
                  "id": 40785, 
                  "position": 14, 
                  "sector": "1", 
                  "time": "31.777"
              }, 
              {
                  "car_number": 99, 
                  "driver": "Adrian Sutil", 
                  "id": 40786, 
                  "position": 15, 
                  "sector": "1", 
                  "time": "32.129"
              }, 
              {
                  "car_number": 17, 
                  "driver": "Jules Bianchi", 
                  "id": 40787, 
                  "position": 16, 
                  "sector": "1", 
                  "time": "34.518"
              }, 
              {
                  "car_number": 4, 
                  "driver": "Max Chilton", 
                  "id": 40788, 
                  "position": 17, 
                  "sector": "1", 
                  "time": "35.538"
              }, 
              {
                  "car_number": 77, 
                  "driver": "Valtteri  Bottas", 
                  "id": 40789, 
                  "position": 1, 
                  "sector": "2", 
                  "time": "24.351"
              }, 
              {
                  "car_number": 22, 
                  "driver": "Jenson Button", 
                  "id": 40790, 
                  "position": 2, 
                  "sector": "2", 
                  "time": "24.38"
              }, 
              {
                  "car_number": 19, 
                  "driver": "Felipe Massa", 
                  "id": 40791, 
                  "position": 3, 
                  "sector": "2", 
                  "time": "24.405"
              }, 
              {
                  "car_number": 14, 
                  "driver": "Fernando Alonso", 
                  "id": 40792, 
                  "position": 4, 
                  "sector": "2", 
                  "time": "24.486"
              }, 
              {
                  "car_number": 3, 
                  "driver": "Daniel Ricciardo", 
                  "id": 40793, 
                  "position": 5, 
                  "sector": "2", 
                  "time": "24.502"
              }, 
              {
                  "car_number": 6, 
                  "driver": "Nico Rosberg", 
                  "id": 40794, 
                  "position": 6, 
                  "sector": "2", 
                  "time": "24.512"
              }, 
              {
                  "car_number": 20, 
                  "driver": "Kevin Magnussen", 
                  "id": 40795, 
                  "position": 7, 
                  "sector": "2", 
                  "time": "24.533"
              }, 
              {
                  "car_number": 27, 
                  "driver": "Nico Hulkenberg", 
                  "id": 40796, 
                  "position": 8, 
                  "sector": "2", 
                  "time": "24.615"
              }, 
              {
                  "car_number": 1, 
                  "driver": "Sebastian Vettel", 
                  "id": 40797, 
                  "position": 9, 
                  "sector": "2", 
                  "time": "24.642"
              }, 
              {
                  "car_number": 7, 
                  "driver": "Kimi R\u00e4ikk\u00f6nen", 
                  "id": 40798, 
                  "position": 10, 
                  "sector": "2", 
                  "time": "24.657"
              }, 
              {
                  "car_number": 25, 
                  "driver": "Jean-Eric Vergne", 
                  "id": 40799, 
                  "position": 11, 
                  "sector": "2", 
                  "time": "24.712"
              }, 
              {
                  "car_number": 26, 
                  "driver": "Daniil Kvyat", 
                  "id": 40800, 
                  "position": 12, 
                  "sector": "2", 
                  "time": "24.77"
              }, 
              {
                  "car_number": 11, 
                  "driver": "Sergio Perez", 
                  "id": 40801, 
                  "position": 13, 
                  "sector": "2", 
                  "time": "24.876"
              }, 
              {
                  "car_number": 21, 
                  "driver": "Esteban Gutierrez", 
                  "id": 40802, 
                  "position": 14, 
                  "sector": "2", 
                  "time": "25.201"
              }, 
              {
                  "car_number": 99, 
                  "driver": "Adrian Sutil", 
                  "id": 40803, 
                  "position": 15, 
                  "sector": "2", 
                  "time": "25.607"
              }, 
              {
                  "car_number": 17, 
                  "driver": "Jules Bianchi", 
                  "id": 40804, 
                  "position": 16, 
                  "sector": "2", 
                  "time": "26.403"
              }, 
              {
                  "car_number": 4, 
                  "driver": "Max Chilton", 
                  "id": 40805, 
                  "position": 17, 
                  "sector": "2", 
                  "time": "28.5"
              }, 
              {
                  "car_number": 13, 
                  "driver": "Pastor Maldonado", 
                  "id": 40806, 
                  "position": 18, 
                  "sector": "2", 
                  "time": "31.407"
              }, 
              {
                  "car_number": 9, 
                  "driver": "Marcus Ericsson", 
                  "id": 40807, 
                  "position": 19, 
                  "sector": "2", 
                  "time": "31.678"
              }, 
              {
                  "car_number": 10, 
                  "driver": "Kamui Kobayashi", 
                  "id": 40808, 
                  "position": 20, 
                  "sector": "2", 
                  "time": "31.925"
              }, 
              {
                  "car_number": 14, 
                  "driver": "Fernando Alonso", 
                  "id": 40809, 
                  "position": 1, 
                  "sector": "3", 
                  "time": "36.787"
              }, 
              {
                  "car_number": 6, 
                  "driver": "Nico Rosberg", 
                  "id": 40810, 
                  "position": 2, 
                  "sector": "3", 
                  "time": "36.989"
              }, 
              {
                  "car_number": 3, 
                  "driver": "Daniel Ricciardo", 
                  "id": 40811, 
                  "position": 3, 
                  "sector": "3", 
                  "time": "37.066"
              }, 
              {
                  "car_number": 1, 
                  "driver": "Sebastian Vettel", 
                  "id": 40812, 
                  "position": 4, 
                  "sector": "3", 
                  "time": "37.097"
              }, 
              {
                  "car_number": 77, 
                  "driver": "Valtteri  Bottas", 
                  "id": 40813, 
                  "position": 5, 
                  "sector": "3", 
                  "time": "37.199"
              }, 
              {
                  "car_number": 7, 
                  "driver": "Kimi R\u00e4ikk\u00f6nen", 
                  "id": 40814, 
                  "position": 6, 
                  "sector": "3", 
                  "time": "37.207"
              }, 
              {
                  "car_number": 22, 
                  "driver": "Jenson Button", 
                  "id": 40815, 
                  "position": 7, 
                  "sector": "3", 
                  "time": "37.212"
              }, 
              {
                  "car_number": 19, 
                  "driver": "Felipe Massa", 
                  "id": 40816, 
                  "position": 8, 
                  "sector": "3", 
                  "time": "37.243"
              }, 
              {
                  "car_number": 20, 
                  "driver": "Kevin Magnussen", 
                  "id": 40817, 
                  "position": 9, 
                  "sector": "3", 
                  "time": "37.443"
              }, 
              {
                  "car_number": 27, 
                  "driver": "Nico Hulkenberg", 
                  "id": 40818, 
                  "position": 10, 
                  "sector": "3", 
                  "time": "37.448"
              }, 
              {
                  "car_number": 25, 
                  "driver": "Jean-Eric Vergne", 
                  "id": 40819, 
                  "position": 11, 
                  "sector": "3", 
                  "time": "37.464"
              }, 
              {
                  "car_number": 11, 
                  "driver": "Sergio Perez", 
                  "id": 40820, 
                  "position": 12, 
                  "sector": "3", 
                  "time": "37.717"
              }, 
              {
                  "car_number": 26, 
                  "driver": "Daniil Kvyat", 
                  "id": 40821, 
                  "position": 13, 
                  "sector": "3", 
                  "time": "37.824"
              }, 
              {
                  "car_number": 21, 
                  "driver": "Esteban Gutierrez", 
                  "id": 40822, 
                  "position": 14, 
                  "sector": "3", 
                  "time": "38.6"
              }, 
              {
                  "car_number": 99, 
                  "driver": "Adrian Sutil", 
                  "id": 40823, 
                  "position": 15, 
                  "sector": "3", 
                  "time": "38.709"
              }, 
              {
                  "car_number": 17, 
                  "driver": "Jules Bianchi", 
                  "id": 40824, 
                  "position": 16, 
                  "sector": "3", 
                  "time": "39.938"
              }, 
              {
                  "car_number": 4, 
                  "driver": "Max Chilton", 
                  "id": 40825, 
                  "position": 17, 
                  "sector": "3", 
                  "time": "42.565"
              }
          ]
      }
    )
  });
  app.use('/', bestSectorsRouter);
};
