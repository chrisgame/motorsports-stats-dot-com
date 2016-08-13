import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  round: belongsTo(),
  fastestLaps: hasMany(),
  pitStops: hasMany(),
  results: hasMany('race-results')
});
