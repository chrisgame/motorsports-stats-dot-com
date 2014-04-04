export default Ember.Route.extend({
  model: function(params){
    this.set('seasonParam', params.season_id) 
    return this.get('store').find('season', params.season_id);
  },
  setupController: function(controller, model){
    this._super(controller, model);
    controller.set('seasonParam', this.get('seasonParam'));
  }
});
