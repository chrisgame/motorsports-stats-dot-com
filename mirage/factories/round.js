import Mirage, {faker} from 'ember-cli-mirage';
import Round from 'motorsports-stats-dot-com/mirage/helpers/rounds';

export default Mirage.Factory.extend({
  date: faker.date.recent(),
  name: Round,
  practiceId: 0,
  qualifyId: 0,
  raceId: 0
});
