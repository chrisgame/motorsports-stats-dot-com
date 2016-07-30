import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  bestSectorIds: [],
  day: faker.random.arrayElement([ 'Sunday', 'Saturday' ]),
  qualifyResultIds: [],
  session: "1",
  speedTrapIds: []
});
