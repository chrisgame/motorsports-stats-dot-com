import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('race-result', 'Race Result', {
  needs: [
  'model:race-result',
  'model:round'
  ]
});

test('Race result is a valid ember-data model', function() {
  var raceSession = this.subject();
  ok(raceSession);
  ok(raceSession instanceof DS.Model);
});
