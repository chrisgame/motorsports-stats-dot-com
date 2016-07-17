import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').find('speedTrap', { speed_trap_id: this.modelFor('qualify-session').id , speed_trap_type: 'qualify'});
  },
  renderTemplate: function() {
    this.render('speed-trap', { into: 'season', outlet: 'results' });
  }
});
