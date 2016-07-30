import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  bestSectorIds: [],
  day: faker.random.arrayElement([ 'Friday', 'Saturday' ]),
  practiceResultIds: [],
  session: "1",
  speedTrapIds: []
});
