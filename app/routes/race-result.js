export default Ember.Route.extend({
  beforeModel: function() {
    this.set('race', this.modelFor('race'));
  },
  model: function(params){
    return this.get('store').find('raceResult', { race_id: this.get('race').id });
  },
  renderTemplate: function(){
    this.render({ outlet: 'results' });
  }
});
