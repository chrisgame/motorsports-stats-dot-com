import DS from 'ember-data';

export default DS.Model.extend({
  qualify: DS.belongsTo('qualify'),
  day: DS.attr('string'),
  name: DS.attr('string'),
  best_sectors: DS.hasMany('best_sector', {async:true}),
  speed_traps: DS.hasMany('speed_trap', {async:true}),
  results: DS.hasMany('qualify_result', {async:true})
});
