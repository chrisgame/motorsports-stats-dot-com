export default Ember.Route.extend({
  model: function(){
    return this.get('store').find('fastestLap', { race_id: this.modelFor('race').id });
  },
  renderTemplate: function(){
    this.render({ outlet: 'results' });
  }
});
