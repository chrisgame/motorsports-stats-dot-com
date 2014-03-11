export default Ember.Route.extend({
  beforeModel: function() {
    this.set('qualifySession', this.modelFor('qualify-session'));
  },
  model: function(params){
    return this.get('store').find('qualifyResult', { qualify_session_id: this.get('qualifySession').id });
  }
});
