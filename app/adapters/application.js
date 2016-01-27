import DS from 'ember-data';

export default DS.ActiveModelAdapter.reopen({
  shouldReloadAll: function() {
    return true;
  },
  shouldBackgroundReloadRecord: function() {
    return true;
  }
});
