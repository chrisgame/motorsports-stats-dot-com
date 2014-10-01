import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('fastest-lap', 'Fastest Lap', {
  needs: [
    'model:fastest-lap',
    'model:round'
  ]
});

test('Fastest lap is a valid ember-data model', function() {
  var fastestLap = this.subject();
  ok(fastestLap);
  ok(fastestLap instanceof DS.Model);
});
