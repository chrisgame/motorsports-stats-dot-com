export default Ember.Route.extend({
  model: function(){
    return this.get('store').find('pitStop', { race_id: this.modelFor('race').id });
  },
  renderTemplate: function(){
    this.render({ outlet: 'results' });
  }
});
