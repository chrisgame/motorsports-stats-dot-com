import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.get('store').query('fastestLap', { race_id: this.modelFor('race').id });
  }
});
