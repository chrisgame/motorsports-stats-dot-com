export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('speedTrap', { speed_trap_id: this.modelFor('practice-session').id, speed_trap_type: 'practice'});
  },
  renderTemplate: function() {
    this.render('speed-trap', { outlet: 'results' });
  }
});
