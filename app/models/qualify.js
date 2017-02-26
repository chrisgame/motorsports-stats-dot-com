import DS from 'ember-data';

export default DS.Model.extend({
  round: DS.belongsTo('round'),
  qualify_sessions: DS.hasMany('qualify-session', {async:true})
});
