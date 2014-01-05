export default DS.Model.extend({
  race: DS.belongsTo('race'),
  position: DS.attr('number'),
  carNumber: DS.attr('number'),
  driver: DS.attr('string'),
  team: DS.attr('string'),
  lap: DS.attr('number'),
  timeOfDay: DS.attr('string'),
  averageSpeed: DS.attr('number'),
  lapTime: DS.attr('duration')
});
