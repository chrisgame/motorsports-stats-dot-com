import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  best_sector_ids: [],
  day: faker.random.arrayElement([ 'Sunday', 'Saturday' ]),
  qualify_result_ids: [],
  session: "1",
  speed_trap_ids: []
});
