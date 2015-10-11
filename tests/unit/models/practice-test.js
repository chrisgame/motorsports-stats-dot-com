import DS from 'ember-data';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('practice', 'Practice', {
  needs: [
  'model:practice',
  'model:round',
  'model:practice-session'
  ]
});

test('Practice is a valid ember-data model', function(assert) {
  var practiceSession = this.subject();
  assert.ok(practiceSession);
  assert.ok(practiceSession instanceof DS.Model);
});
