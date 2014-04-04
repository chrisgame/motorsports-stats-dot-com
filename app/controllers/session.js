export default Ember.ObjectController.extend({
  name : function() {
    return [this.get('day'), this.get('session')].join(' ');
  }.property('day', 'session'),
  nameUrl : function() {
    if(Ember.isEmpty(this.get('session'))){
      return this.get('day');
    } else {
      return [this.get('day'), this.get('session')].join('-');
    }
  }.property('day', 'session')
});
