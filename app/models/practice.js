export default DS.Model.extend({
  round: DS.belongsTo('round'),
  practice_sessions: DS.hasMany('practice_session', {async:true})
});
