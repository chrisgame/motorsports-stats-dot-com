export default Ember.Route.extend({
  model: function(){
    return this.get('store').find('season');
  },
  afterModel: function(model){
    model = model.reverseObjects();
  }
});
