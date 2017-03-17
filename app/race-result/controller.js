import Ember from 'ember';
import computed from 'ember-computed';

export default Ember.Controller.extend({
  queryParams: ['field', 'direction'],
  field: 'position',
  direction: 'desc',

  sortedResults: computed('model', 'field', 'direction', function() {
    let results = this.get('model');
    let field = this.get('field');
    let direction = this.get('direction');

    if (direction === 'desc') {
      return results.sortBy(field);
    } else {
      return results.sortBy(field).reverse();
    }
  }),

  toggleDirection: computed('direction', function() {
    let direction = this.get('direction');

    if (direction === 'asc') {
     return 'desc';
    } else {
     return 'asc';
    }
  })
});
