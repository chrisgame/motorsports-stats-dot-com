import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(params) {
    this.transitionTo('season', params.params.season_id);
  }
});
