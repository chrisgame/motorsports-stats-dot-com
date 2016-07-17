import DS from 'ember-data';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('pit-stop', 'Pit Stop', {
  needs: [
  'model:pit-stop',
  'model:round'
  ]
});

test('Pit stop is a vaild ember-data model', function(assert) {
  var pitStop = this.subject();
  assert.ok(pitStop);
  assert.ok(pitStop instanceof DS.Model);
});
