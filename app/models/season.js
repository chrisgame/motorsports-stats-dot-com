import DS from 'ember-data';

export default DS.Model.extend({
  rounds: DS.hasMany('round', {async:true})
});
