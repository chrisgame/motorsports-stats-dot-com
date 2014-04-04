export default Ember.Route.extend({
  model: function(params){
    var practice_session_id = parseInt(this.modelFor('practice-session').id);
    return this.get('store').find('practiceResult', { practice_session_id: practice_session_id });
  }
});
