import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  round: belongsTo(),
  practiceSession: hasMany()
});
