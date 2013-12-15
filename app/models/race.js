export default DS.Model.extend({
  season: DS.belongsTo('season'),
  fastestLaps: DS.hasMany('fastestLaps', {async:true}),
  pitStops: DS.hasMany('pitStops', {async:true}),
  results: DS.hasMany('results', {async:true})
});
