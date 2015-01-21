import DS from 'ember-data';

export default DS.Model.extend({
  season: DS.belongsTo('season'),
  date: DS.attr('date'),
  name: DS.attr('string'),
  practice: DS.belongsTo('practice', {async:true}),
  qualify: DS.belongsTo('qualify', {async:true}),
  race: DS.belongsTo('race', {async:true})
});
