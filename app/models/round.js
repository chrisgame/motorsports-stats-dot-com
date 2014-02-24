export default DS.Model.extend({
  season: DS.belongsTo('season'),
  name: DS.attr('string'),
  practices: DS.hasMany('practice', {async:true}),
  qualifies: DS.hasMany('qualify', {async:true}),
  race: DS.belongsTo('race', {async:true})
});
