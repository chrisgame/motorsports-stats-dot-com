export default Ember.Route.extend({
  model: function(params){
    var practice_sessions = this.modelFor('practice').get('data.practice_sessions');
    var day = params.practice_session.split('-')[0];
    var session = params.practice_session.split('-')[1];
    return this.get('store').find('practice-session', parseInt(practice_sessions.filterBy('day', day).filterBy('session', session)[0].id));
  }
});
