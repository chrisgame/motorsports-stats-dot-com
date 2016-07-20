import Mirage, {faker} from 'ember-cli-mirage';
import Round from 'motorsports-stats-dot-com/mirage/helpers/rounds';

export default Mirage.Factory.extend({
  date: faker.date.recent(),
  name: Round,
  practice_id: 0,
  qualify_id: 0,
  race_id: 0
});
