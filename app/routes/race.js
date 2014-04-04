export default Ember.Route.extend({
  model: function(){
    var race_id = parseInt(this.modelFor('round').get('data.race').id);
    return this.get('store').find('race', race_id);
  }
});
