export default DS.Model.extend({
  round: DS.belongsTo('round'),
  best_sectors: DS.hasMany('best_sector', {async:true}),
  speed_traps: DS.hasMany('speed_trap', {async:true}),
  results: DS.hasMany('qualify_result', {async:true})
});
