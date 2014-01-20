export default DS.Model.extend({
  rounds: DS.hasMany('round', {async:true})
});
