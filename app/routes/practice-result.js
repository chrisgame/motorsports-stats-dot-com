import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.get('store').find('practiceResult', { practice_session_id: this.modelFor('practice-session').id });
  },
  renderTemplate: function(){
    this.render({
      into: 'season',
      outlet: 'results'
    });
  }
});
