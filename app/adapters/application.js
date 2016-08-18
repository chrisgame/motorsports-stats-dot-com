import DS from 'ember-data';
import ENV from 'motorsports-stats-dot-com/config/environment';

export default DS.ActiveModelAdapter.reopen({
  host: ENV.apiHost,
  shouldReloadAll: function() {
    return true;
  },
  shouldBackgroundReloadRecord: function() {
    return true;
  }
});
