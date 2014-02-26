export default DS.Model.extend({
  round: DS.belongsTo('round'),
  position: DS.attr('string'),
  carNumber: DS.attr('number'),
  driver: DS.attr('string'),
  team: DS.attr('string'),
  laps: DS.attr('number'),
  timeOrRetirement: DS.attr('string'),
  q1: DS.attr('string'),
  q2: DS.attr('string'),
  q3: DS.attr('string'),
});
