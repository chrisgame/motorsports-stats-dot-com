import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.get('store').findAll('season');
  },
  afterModel: function(model){
    model = model.reverseObjects();
  }
});
