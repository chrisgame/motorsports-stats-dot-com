import DS from 'ember-data';

export default DS.Model.extend({
  practice: DS.belongsTo('practice'),
  day: DS.attr('string'),
  session: DS.attr('string'),
  best_sectors: DS.hasMany('best-sector', {async:true}),
  speed_traps: DS.hasMany('speed-trap', {async:true}),
  results: DS.hasMany('practice-result', {async:true})
});
