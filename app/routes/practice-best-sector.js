export default Ember.Route.extend({
  beforeModel: function() {
    this.set('practiceSession', this.modelFor('practice-session'));
  },
  model: function(params){
    return this.get('store').find('bestSector', { best_sector_id: this.get('practiceSession').id , best_sector_type: 'practice'});
  },
  renderTemplate: function() {
    this.render('best-sector');
  }
});
