import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('practice-session', 'Practice Session', {
  needs: [
  'model:round',
  'model:practice-session',
  'model:practice',
  'model:best-sector',
  'model:speed-trap',
  'model:practice-result'
  ]
});

test('Practice session is a valid ember-data model', function(assert) {
  var practiceSession = this.subject();
  assert.ok(practiceSession);
  assert.ok(practiceSession instanceof DS.Model);
});
