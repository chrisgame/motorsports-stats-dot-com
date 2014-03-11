export default Ember.Route.extend({
  beforeModel: function() {
    this.set('practiceSession', this.modelFor('practice-session'));
  },
  model: function(params) {
    return this.get('store').find('speedTrap', { speed_trap_id: this.get('practiceSession').id, speed_trap_type: 'practice'});
  },
  renderTemplate: function() {
    this.render('speed-trap');
  }
});
