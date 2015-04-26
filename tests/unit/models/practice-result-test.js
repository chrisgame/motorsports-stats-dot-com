import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('practice-result', 'Practice Result', {
  needs: [
  'model:practice',
  'model:practice-session',
  'model:practice-result',
  'model:best-sector',
  'model:speed-trap'
  ]
});

test('Practice result is a valid ember-data model', function(assert) {
  var practiceResult = this.subject();
  assert.ok(practiceResult);
  assert.ok(practiceResult instanceof DS.Model);
});
