export default DS.Model.extend({
  races: DS.hasMany('race', {async:true})
});
