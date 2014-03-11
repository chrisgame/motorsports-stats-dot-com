export default DS.Model.extend({
  round: DS.belongsTo('round'),
  qualify_sessions: DS.hasMany('qualify_session', {async:true})
});
