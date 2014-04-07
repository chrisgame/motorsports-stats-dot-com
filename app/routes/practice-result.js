export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('practiceResult', { practice_session_id: this.modelFor('practice-session').id });
  },
  renderTemplate: function(){
    this.render({ outlet: 'results' });
  }
});
