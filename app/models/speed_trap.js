export default DS.Model.extend({
  practice: DS.belongsTo('practice'),
  day: DS.attr('string'),
  session: DS.attr('string'),
  position: DS.attr('number'),
  carNumber: DS.attr('number'),
  driver: DS.attr('string'),
  timeOfDay: DS.attr('string'),
  speed: DS.attr('string')
});
