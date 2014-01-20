export default Ember.Route.extend({
  beforeModel: function() {
    this.set('round', this.modelFor('round'));
  },
  model: function(params){
    return this.get('store').find('result', { round_id: this.get('round').id });
  }
});
