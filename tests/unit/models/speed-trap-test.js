import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('speed-trap', 'Speed Trap', {
  needs: [
  'model:speed-trap'
  ]
});

test('Speed trap is a valid ember-data model', function() {
  var speedTrap = this.subject();
  ok(speedTrap);
  ok(speedTrap instanceof DS.Model);
});
