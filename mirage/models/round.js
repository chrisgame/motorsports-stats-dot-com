import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  season: belongsTo(),
  practice: hasMany(),
  qualify: hasMany(),
  race: hasMany()
});
