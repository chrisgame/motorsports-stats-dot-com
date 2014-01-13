export default DS.Model.extend({
  race: DS.belongsTo('race'),
  position: DS.attr('string'),
  carNumber: DS.attr('number'),
  driver: DS.attr('string'),
  team: DS.attr('string'),
  laps: DS.attr('number'),
  timeOrRetirement: DS.attr('string'),
  grid: DS.attr('string'),
  points: DS.attr('string')
});
