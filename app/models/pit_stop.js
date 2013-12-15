export default DS.Model.extend({
  race: DS.belongsTo('race'),
  stops: DS.attr('integer'),
  carNumber: DS.attr('integer'),
  driver: DS.attr('string'),
  team: DS.attr('string'),
  lap: DS.attr('integer'),
//  timeOfDay: DS.attr('time'),
//  time: DS.attr('decimal'),
//  totalPitTime: DS.attr('decimal')
});
