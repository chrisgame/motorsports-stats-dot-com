export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('raceResult', { race_id: this.modelFor('race').id });
  },
  renderTemplate: function(){
    this.render({ outlet: 'results' });
  }
});
