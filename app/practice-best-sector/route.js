import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.get('store').query('bestSector', { best_sector_id: this.modelFor('practice-session').id , best_sector_type: 'practice'});
  }
});
