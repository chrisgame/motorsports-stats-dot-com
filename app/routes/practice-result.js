export default Ember.Route.extend({
  beforeModel: function() {
    this.set('practice', this.modelFor('practice'));
  },
  model: function(params){
    return this.get('store').find('practiceResult', { practice_id: this.get('practice').id });
  }
});
