import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  car_number: 6,
  driver: "Nico Rosberg",
  grid: "3",
  laps: 57,
  points: "25.0",
  position: "1",
  team: "Mercedes",
  time_or_retirement: "5578.71"
});
