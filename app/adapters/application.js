import DS from 'ember-data';

export default DS.ActiveModelAdapter.reopen({
  host: 'http://localhost:4200',
  shouldReloadAll: function() {
    return true;
  },
  shouldBackgroundReloadRecord: function() {
    return true;
  }
});
