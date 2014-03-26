export default Ember.Route.extend({
  model: function(){
    var race_id = parseInt(this.modelFor('race').id);
    return this.get('store').find('pitStop', { race_id: race_id });
  }
});
