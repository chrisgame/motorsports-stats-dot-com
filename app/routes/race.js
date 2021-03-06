import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('race', params.race_id);
  },
  renderTemplate: function(){
    this.render({ into: 'season', outlet: 'session' });
  }
});
