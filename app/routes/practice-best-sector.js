export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('bestSector', { best_sector_id: this.modelFor('practice-session').id , best_sector_type: 'practice'});
  },
  renderTemplate: function() {
    this.render('best-sector', { outlet: 'results' });
  }
});
