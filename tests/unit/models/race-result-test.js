import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('race-result', 'Race Result', {
  needs: [
  'model:race-result',
  'model:practice',
  'model:qualify',
  'model:race',
  'model:round',
  'model:season'
  ]
});

test('Race result is a valid ember-data model', function(assert) {
  var raceSession = this.subject();
  assert.ok(raceSession);
  assert.ok(raceSession instanceof DS.Model);
});
