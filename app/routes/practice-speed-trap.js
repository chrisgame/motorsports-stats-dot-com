export default Ember.Route.extend({
  beforeModel: function() {
    this.set('practice', this.modelFor('practice'));
  },
  model: function(params) {
    return this.get('store').find('speedTrap', { speed_trapable_id: this.get('practice').id , speed_trapable_type: 'Practice'});
  },
  renderTemplate: function() {
    this.render('speed-trap');
  }
});
