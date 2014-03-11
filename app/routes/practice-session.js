export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('practiceSession', params.practice_session_id);
  }
});
