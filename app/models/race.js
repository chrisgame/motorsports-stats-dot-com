import DS from 'ember-data';

export default DS.Model.extend({
  round: DS.belongsTo('round'),
  fastest_laps: DS.hasMany('fastest-lap', {async:true}),
  pit_stops: DS.hasMany('pit-stop', {async:true}),
  race_results: DS.hasMany('race-result', {async:true})
});
