export default Ember.Route.extend({
  model: function(params){
    var race_id = parseInt(this.modelFor('race').id);
    return this.get('store').find('raceResult', { race_id: race_id });
  }
});
