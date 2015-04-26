import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('practice', 'Practice', {
  needs: [
  'model:season',
  'model:round',
  'model:practice',
  'model:qualify',
  'model:race',
  'model:practice-session',
  'model:best-sector',
  'model:speed-trap',
  'model:practice-result'
  ]
});

test('Practice is a valid ember-data model', function(assert) {
  var practiceSession = this.subject();
  assert.ok(practiceSession);
  assert.ok(practiceSession instanceof DS.Model);
});
