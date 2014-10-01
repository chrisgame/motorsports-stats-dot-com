import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('pit-stop', 'Pit Stop', {
  needs: [
  'model:pit-stop',
  'model:round'
  ]
});

test('Pit stop is a vaild ember-data model', function() {
  var pitStop = this.subject();
  ok(pitStop);
  ok(pitStop instanceof DS.Model);
});
