import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  car_number: 77,
  driver: "Valtteri  Bottas",
  position: 1,
  speed: "318.5",
  time_of_day: "13:29:03"
});
