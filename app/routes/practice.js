export default Ember.Route.extend({
  model: function(params){
    var practice_id = parseInt(this.modelFor('round').get('data.practice').id);
    return this.get('store').find('practice', practice_id);
  }
});
