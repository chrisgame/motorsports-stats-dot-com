export default Ember.Route.extend({
  model: function(params) {
    var practice_session_id = parseInt(this.modelFor('practice-session').id);
    return this.get('store').find('best-sector', { best_sector_id: practice_session_id , best_sector_type: 'practice'});
  },
  renderTemplate: function() {
    this.render('best-sector');
  }
});
