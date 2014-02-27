export default Ember.Route.extend({
  beforeModel: function() {
    this.set('practice', this.modelFor('practice'));
  },
  model: function(params){
    return this.get('store').find('bestSector', { best_sectorable_id: this.get('practice').id , best_sectorable_type: 'Practice'});
  },
  renderTemplate: function() {
    this.render('best-sector');
  }
});
