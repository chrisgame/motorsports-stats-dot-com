export default Ember.Route.extend({
  model: function(params) {
    var qualifying_session_id = parseInt(this.modelFor('qualify-session').get('data.id'));
    return this.get('store').find('bestSector', { best_sector_id: qualifying_session_id, best_sector_type: 'qualify'});
  },
  renderTemplate: function() {
    this.render('best-sector');
  }
});
