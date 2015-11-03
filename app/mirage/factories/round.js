import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  date: faker.date.recent(),
  name: 'Australia',
  practice_id: 0,
  qualify_id: 0,
  race_id: 0
});
