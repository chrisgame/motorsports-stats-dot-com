export default Ember.Route.extend({
  beforeModel: function() {
    this.set('qualify', this.modelFor('qualify'));
  },
  model: function(params){
    return this.get('store').find('qualifyResult', { qualify_id: this.get('qualify').id });
  }
});
