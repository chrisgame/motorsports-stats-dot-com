export default Ember.Route.extend({
  model: function(params){
    var season = this.controllerFor('season').get('seasonParam');
    var rounds = this.modelFor('season').get('data.rounds');
    return this.get('store').find('round', parseInt(rounds.findBy('name', params.round).id));
  }
});
