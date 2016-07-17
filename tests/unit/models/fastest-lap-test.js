import DS from 'ember-data';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('fastest-lap', 'Fastest Lap', {
  needs: [
    'model:fastest-lap',
    'model:round'
  ]
});

test('Fastest lap is a valid ember-data model', function(assert) {
  var fastestLap = this.subject();
  assert.ok(fastestLap);
  assert.ok(fastestLap instanceof DS.Model);
});
