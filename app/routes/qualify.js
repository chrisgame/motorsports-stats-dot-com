export default Ember.Route.extend({
  model: function(params){
    var qualify_id = parseInt(this.modelFor('round').get('data.qualify').id);
    return this.get('store').find('qualify', qualify_id);
  }
});
