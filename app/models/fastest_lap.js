export default DS.Model.extend({
  round: DS.belongsTo('round'),
  position: DS.attr('number'),
  carNumber: DS.attr('number'),
  driver: DS.attr('string'),
  team: DS.attr('string'),
  lap: DS.attr('number'),
  timeOfDay: DS.attr('string'),
  averageSpeed: DS.attr('number'),
  lapTime: DS.attr('duration')
});
