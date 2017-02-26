import Ember from 'ember';

export default Ember.Controller.extend({
  sortBy: ['id:desc'],
  seasons: Ember.computed.sort('model', 'sortBy')
});
