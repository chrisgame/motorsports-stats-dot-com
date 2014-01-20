export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('round', params.round_number);
  }
});
