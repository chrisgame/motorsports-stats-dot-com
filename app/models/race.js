export default DS.Model.extend({
  season: DS.belongsTo('season'),
  name: DS.attr('string'),
  fastest_laps: DS.hasMany('fastest_lap', {async:true}),
  pit_stops: DS.hasMany('pit_stop', {async:true}),
  results: DS.hasMany('result', {async:true})
});
