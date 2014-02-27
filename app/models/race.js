export default DS.Model.extend({
  round: DS.belongsTo('round'),
  fastest_laps: DS.hasMany('fastest_lap', {async:true}),
  pit_stops: DS.hasMany('pit_stop', {async:true}),
  results: DS.hasMany('race_result', {async:true})
});
