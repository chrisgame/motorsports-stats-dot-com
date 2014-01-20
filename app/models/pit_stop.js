export default DS.Model.extend({
  round: DS.belongsTo('round'),
  stops: DS.attr('number'),
  carNumber: DS.attr('number'),
  driver: DS.attr('string'),
  team: DS.attr('string'),
  lap: DS.attr('number'),
  timeOfDay: DS.attr('string'),
  time: DS.attr('string'),
  totalPitTime: DS.attr('string')
});
