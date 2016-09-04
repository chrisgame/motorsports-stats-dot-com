import { ActiveModelSerializer } from 'ember-cli-mirage';

export default ActiveModelSerializer.extend({
  attrs: ['id', 'fastest_lap_ids', 'pit_stop_ids', 'race_results_ids']
});
