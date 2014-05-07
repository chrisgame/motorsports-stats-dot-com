export default DS.Model.extend({
  day: DS.attr('string'),
  session: DS.attr('string'),
  sector: DS.attr('string'),
  position: DS.attr('number'),
  carNumber: DS.attr('number'),
  driver: DS.attr('string'),
  time: DS.attr('duration')
});
