import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('pit-stop', 'Pit Stop', {
  needs: [
  'model:season',
  'model:practice',
  'model:qualify',
  'model:race',
  'model:pit-stop',
  'model:round'
  ]
});

test('Pit stop is a vaild ember-data model', function(assert) {
  var pitStop = this.subject();
  assert.ok(pitStop);
  assert.ok(pitStop instanceof DS.Model);
});
