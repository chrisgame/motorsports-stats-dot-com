import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  car_number: 8,
  driver: "Romain Grosjean",
  id: 6933,
  lap: 1,
  race_id: 898,
  stops: 1,
  team: "Lotus-Renault",
  time: "17.255",
  time_of_day: "17:09:56",
  total_pit_time: "17.255"
});
