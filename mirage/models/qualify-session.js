import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  qualify: belongsTo(),
  bestSectors: hasMany(),
  speedTraps: hasMany(),
  results: hasMany('qualify-results')
});
