import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  practice_session: belongsTo()
});
