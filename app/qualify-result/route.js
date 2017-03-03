import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.get('store').query('qualifyResult', { qualify_session_id: this.modelFor('qualify-session').id });
  }
});
