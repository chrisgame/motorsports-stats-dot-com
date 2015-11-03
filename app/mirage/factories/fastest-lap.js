import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  average_speed: "206.436",
  car_number: 6,
  driver: "Nico Rosberg",
  lap: "19",
  position: 1,
  race_id: 898,
  team: "Mercedes",
  time: "92.478",
  time_of_day: "17:41:08"
});
