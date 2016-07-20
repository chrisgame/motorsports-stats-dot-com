import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  season: belongsTo(),
  practice: belongsTo(),
  qualify: belongsTo(),
  race: belongsTo()
});
