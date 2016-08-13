import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  practice: belongsTo(),
  bestSectors: hasMany(),
  speedTraps: hasMany(),
  results: hasMany('practice-results')
});
