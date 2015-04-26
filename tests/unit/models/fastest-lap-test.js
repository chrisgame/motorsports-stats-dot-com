import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('fastest-lap', 'Fastest Lap', {
  needs: [
    'model:season',
    'model:practice',
    'model:qualify',
    'model:race',
    'model:fastest-lap',
    'model:round'
  ]
});

test('Fastest lap is a valid ember-data model', function(assert) {
  var fastestLap = this.subject();
  assert.ok(fastestLap);
  assert.ok(fastestLap instanceof DS.Model);
});
