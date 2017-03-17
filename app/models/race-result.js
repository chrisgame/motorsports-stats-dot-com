import DS from 'ember-data';

export default DS.Model.extend({
  round: DS.belongsTo('round'),
  position: DS.attr('number'),
  carNumber: DS.attr('number'),
  driver: DS.attr('string'),
  team: DS.attr('string'),
  laps: DS.attr('number'),
  timeOrRetirement: DS.attr('string'),
  grid: DS.attr('number'),
  points: DS.attr('number')
});
