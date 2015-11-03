import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  car_number: 14,
  driver: "Fernando Alonso",
  position: 1,
  sector: "1",
  time: "30.46"
});
