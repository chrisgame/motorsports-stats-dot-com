export default Ember.Route.extend({
  beforeModel: function() {
    this.set('qualify', this.modelFor('qualify'));
  },
  model: function(params){
    return this.get('store').find('speedTrap', { speed_trapable_id: this.get('qualify').id , speed_trapable_type: 'Qualify'});
  }
});
