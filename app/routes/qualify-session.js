export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('qualify-session', params.qualify_session_id);
  },
  renderTemplate: function(){
    this.render({ outlet: 'session' });
  }
});
