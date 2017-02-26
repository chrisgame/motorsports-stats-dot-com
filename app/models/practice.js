import DS from 'ember-data';

export default DS.Model.extend({
  round: DS.belongsTo('round'),
  practice_sessions: DS.hasMany('practice-session', {async:true})
});
