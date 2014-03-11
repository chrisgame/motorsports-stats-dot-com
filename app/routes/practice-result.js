export default Ember.Route.extend({
  beforeModel: function() {
    this.set('practiceSession', this.modelFor('practice-session'));
  },
  model: function(params){
    return this.get('store').find('practiceResult', { practice_session_id: this.get('practiceSession').id});
  }
});
