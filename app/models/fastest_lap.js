export default DS.Model.extend({
  race: DS.belongsTo('race'),
  position: DS.attr('number'),
  carNumber: DS.attr('number'),
  driver: DS.attr('string'),
  team: DS.attr('string'),
  lap: DS.attr('number'),
//  timeOfDay: DS.attr('time'),
//  averageSpeed: DS.attr('decimal'),
//  lapTime: DS.attr('decimal')
});
