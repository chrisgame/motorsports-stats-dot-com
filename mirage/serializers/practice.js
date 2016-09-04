import { ActiveModelSerializer } from 'ember-cli-mirage';

export default ActiveModelSerializer.extend({
  attrs: ['id', 'practice_session_ids']
});
