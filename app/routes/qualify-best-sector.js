export default Ember.Route.extend({
  beforeModel: function() {
    this.set('qualifySession', this.modelFor('qualify-session'));
  },
  model: function(params) {
    return this.get('store').find('bestSector', { best_sector_id: this.get('qualifySession').id , best_sector_type: 'qualify'});
  },
  renderTemplate: function() {
    this.render('best-sector', { outlet: 'results' });
  }
});
