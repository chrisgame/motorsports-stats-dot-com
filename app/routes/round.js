export default Ember.Route.extend({
  model: function(params){
    debugger;
    this.modelFor('season').then(function(season){
      console.log(season.get('rounds'));
    });
    console.log(this.modelFor('season').get('rounds'));
    return this.get('store').find('round', params.round);
  }
});
