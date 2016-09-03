import { ActiveModelSerializer } from 'ember-cli-mirage';

export default ActiveModelSerializer.extend({
  attrs: ['id', 'name', 'practice_id', 'qualify_id', 'race_id', 'date']
});
