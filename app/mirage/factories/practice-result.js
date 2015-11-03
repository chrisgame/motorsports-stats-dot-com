import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  car_number: 14,
  driver: "Fernando Alonso",
  gap: "",
  laps: 20,
  position: "1",
  practice_session_id: 540,
  team: "Ferrari",
  time_or_retirement: "91.84"
});
