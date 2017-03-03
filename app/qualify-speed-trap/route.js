import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').query('speedTrap', { speed_trap_id: this.modelFor('qualify-session').id , speed_trap_type: 'qualify'});
  }
});
