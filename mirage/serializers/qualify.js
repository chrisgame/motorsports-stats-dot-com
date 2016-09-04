import { ActiveModelSerializer } from 'ember-cli-mirage';

export default ActiveModelSerializer.extend({
  attrs: ['id', 'qualify_session_ids']
});
