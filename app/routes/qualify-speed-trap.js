export default Ember.Route.extend({
  beforeModel: function() {
    this.set('qualifySession', this.modelFor('qualify-session'));
  },
  model: function(params) {
    return this.get('store').find('speedTrap', { speed_trap_id: this.get('qualifySession').id , speed_trap_type: 'qualify'});
  },
  renderTemplate: function() {
    this.render('speed-trap', { outlet: 'results' });
  }
});
