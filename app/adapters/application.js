import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  shouldReloadAll: function() {
    return true;
  },
  shouldBackgroundReloadRecord: function() {
    return true;
  }
});
