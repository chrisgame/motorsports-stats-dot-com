import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.get('store').find('qualifyResult', { qualify_session_id: this.modelFor('qualify-session').id });
  },
  renderTemplate: function(){
    this.render({ into: 'season', outlet: 'results' });
  }
});
