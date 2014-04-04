export default Ember.Route.extend({
  model: function(params){
    var qualifying_session_id = parseInt(this.modelFor('qualify-session').get('data.id'));
    return this.get('store').find('qualifyResult', { qualify_session_id: qualifying_session_id });
  }
});
