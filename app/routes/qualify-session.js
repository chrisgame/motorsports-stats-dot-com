export default Ember.Route.extend({
  model: function(params){
    var qualify_sessions = this.modelFor('qualify').get('data.qualify_sessions');
    return this.get('store').find('qualify-session', parseInt(qualify_sessions.findBy('day', params.qualify_session.trim()).id));
  }
});
