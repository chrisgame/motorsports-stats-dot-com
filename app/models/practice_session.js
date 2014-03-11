export default DS.Model.extend({
  practice: DS.belongsTo('practice'),
  day: DS.attr('string'),
  session: DS.attr('string'),
  best_sectors: DS.hasMany('best_sector', {async:true}),
  speed_traps: DS.hasMany('speed_trap', {async:true}),
  results: DS.hasMany('practice_result', {async:true})
});
