export default DS.Model.extend({
  season: DS.belongsTo('season'),
  name: DS.attr('string'),
  practices: DS.belongsTo('practice', {async:true}),
  qualifies: DS.belongsTo('qualify', {async:true}),
  race: DS.belongsTo('race', {async:true})
});
