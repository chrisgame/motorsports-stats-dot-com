export default Ember.Route.extend({
  model: function(params){
    debugger;
    return this.get('store').find('season', params.season_id);
  }
});
