export default Ember.Route.extend({
  model: function(params){
    var qualify_sessions = this.modelFor('qualify').get('data.qualify_sessions');
    var qualify_session = qualify_sessions.find(function(qualify_session, index, self) {
      var day = params.qualify_session.split('-')[0];
      var session = params.qualify_session.split('-')[1];
      if(Ember.isEmpty(session)){
        if(qualify_session.get('day') === day) { return true; }
      } else {
        if((qualify_session.get('day') === day) && (qualify_session.get('session') === session)) { return true; } 
      }
    });
    return this.get('store').find('qualify-session', parseInt(qualify_session.id));
  }
});
