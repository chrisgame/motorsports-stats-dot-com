import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.get('store').find('raceResult', { race_id: this.modelFor('race').id });
  },
  renderTemplate: function(){
    this.render({ outlet: 'results' });
  }
});
