import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.get('store').query('practiceResult', { practice_session_id: this.modelFor('practice-session').id });
  }
});
