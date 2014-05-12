export default Ember.Route.extend({
  model: function() {
    return this.get('store').find('bestSector', { best_sector_id: this.modelFor('qualify-session').id , best_sector_type: 'qualify'});
  },
  renderTemplate: function() {
    this.render('best-sector', { outlet: 'results' });
  }
});
