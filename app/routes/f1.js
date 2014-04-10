export default Ember.Route.extend({
  model: function(){
    return this.get('store').find('season');
  },
  afterModel: function(model, transition){
    model = model.reverseObjects();
  }
});
