import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('qualify', params.qualify_id);
  },
  renderTemplate: function(){
    this.render({ outlet: 'sessions'});
  }
});
