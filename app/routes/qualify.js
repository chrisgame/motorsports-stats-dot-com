export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('qualify', params.qualifying_id);
  }
});
