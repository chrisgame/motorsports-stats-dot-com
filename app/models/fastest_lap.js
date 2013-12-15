export default DS.Model.extend({
  race: DS.belongsTo('race'),
  position: DS.attr('integer'),
  carNumber: DS.attr('integer'),
  driver: DS.attr('string'),
  team: DS.attr('string'),
  lap: DS.attr('integer'),
//  timeOfDay: DS.attr('time'),
//  averageSpeed: DS.attr('decimal'),
//  lapTime: DS.attr('decimal')
});
