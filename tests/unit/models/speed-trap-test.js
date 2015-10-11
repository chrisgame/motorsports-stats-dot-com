import DS from 'ember-data';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('speed-trap', 'Speed Trap', {
  needs: [
  'model:speed-trap'
  ]
});

test('Speed trap is a valid ember-data model', function(assert) {
  var speedTrap = this.subject();
  assert.ok(speedTrap);
  assert.ok(speedTrap instanceof DS.Model);
});
