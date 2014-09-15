import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('round', params.round_id);
  },
  renderTemplate: function(){
    this.render({ outlet: 'round' });
  }
});
