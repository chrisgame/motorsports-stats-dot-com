import DS from 'ember-data';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('race-result', 'Race Result', {
  needs: [
  'model:race-result',
  'model:round'
  ]
});

test('Race result is a valid ember-data model', function(assert) {
  var raceSession = this.subject();
  assert.ok(raceSession);
  assert.ok(raceSession instanceof DS.Model);
});
