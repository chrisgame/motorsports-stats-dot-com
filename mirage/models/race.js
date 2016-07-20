import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  round: belongsTo(),
  fastest_laps: hasMany(),
  pit_stops: hasMany(),
  results: hasMany()
});
