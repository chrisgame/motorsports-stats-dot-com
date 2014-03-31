export default Ember.ObjectController.extend({
  name : function() {
    return [this.get('day'), this.get('session')].join(' ');
  }.property('day', 'session')
});
