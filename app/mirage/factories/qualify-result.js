import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  car_number: 44,
  driver: "Lewis Hamilton",
  laps: 22,
  position: "1",
  q1: "91.699",
  q2: "102.89",
  q3: "104.231",
  qualify_session_id: 207,
  team: "Mercedes",
  time_or_retirement: null
});
