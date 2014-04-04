export default Ember.Route.extend({
  model: function(params) {
    var practice_session_id = parseInt(this.modelFor('practice-session').id);
    return this.get('store').find('speedTrap', { speed_trap_id: practice_session_id, speed_trap_type: 'practice'});
  },
  renderTemplate: function() {
    this.render('speed-trap');
  }
});
