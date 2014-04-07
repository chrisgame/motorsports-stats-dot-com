export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('qualifyResult', { qualify_session_id: this.modelFor('qualify-session').id });
  },
  renderTemplate: function(){
    this.render({ outlet: 'results' });
  }
});
