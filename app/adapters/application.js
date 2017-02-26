import ActiveModelAdapter from 'active-model-adapter';
import ENV from 'motorsports-stats-dot-com/config/environment';

export default ActiveModelAdapter.extend({
  host: ENV.apiHost,
  shouldReloadAll: function() {
    return true;
  },
  shouldBackgroundReloadRecord: function() {
    return true;
  }
});
