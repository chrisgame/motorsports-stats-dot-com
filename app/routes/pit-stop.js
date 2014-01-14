export default Ember.Route.extend({
  beforeModel: function() {
    this.set('race', this.modelFor('race'));
  },
  model: function(params){
    return this.get('store').find('pitStop', { race_id: this.get('race').id });
  }
});
