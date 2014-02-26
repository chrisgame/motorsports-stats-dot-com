export default Ember.Route.extend({
  beforeModel: function() {
    this.set('qualify', this.modelFor('qualify'));
  },
  model: function(params){
    return this.get('store').find('bestSector', { best_sectorable_id: this.get('qualify').id , best_sectorable_type: 'Qualify'});
  }
});
