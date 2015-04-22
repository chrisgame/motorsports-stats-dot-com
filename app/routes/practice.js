import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('practice', params.practice_id);
  },
  renderTemplate: function(){
    this.render({
      into: 'season',
      outlet: 'sessions'
    });
  }
});
