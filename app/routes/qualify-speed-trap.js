export default Ember.Route.extend({
  model: function(params) {
    var qualifying_session_id = parseInt(this.modelFor('qualify-session').get('data.id'));
    return this.get('store').find('speedTrap', { speed_trap_id: qualifying_session_id, speed_trap_type: 'qualify'});
  },
  renderTemplate: function() {
    this.render('speed-trap');
  }
});
