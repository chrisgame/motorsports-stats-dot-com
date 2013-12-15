export default DS.Model.extend({
  race: DS.belongsTo('race'),
  position: DS.attr('integer'),
  carNumber: DS.attr('integer'),
  driver: DS.attr('string'),
  team: DS.attr('string'),
  laps: DS.attr('integer'),
  timeOrRetirement: DS.attr('string'),
  grid: DS.attr('integer'),
  points: DS.attr('string')
});
