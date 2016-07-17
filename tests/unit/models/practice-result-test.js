import DS from 'ember-data';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('practice-result', 'Practice Result', {
  needs: [
  'model:practice-result',
  'model:practice-session'
  ]
});

test('Practice result is a valid ember-data model', function(assert) {
  var practiceResult = this.subject();
  assert.ok(practiceResult);
  assert.ok(practiceResult instanceof DS.Model);
});
