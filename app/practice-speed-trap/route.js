import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').find('speedTrap', { speed_trap_id: this.modelFor('practice-session').id, speed_trap_type: 'practice'});
  }
});
