import DS from 'ember-data';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('qualify', 'Qualify', {
  needs: [
  'model:qualify',
  'model:round',
  'model:qualify-session'
  ]
});

test('Qualify is a valid ember-data model', function(assert) {
  var qualify = this.subject();
  assert.ok(qualify);
  assert.ok(qualify instanceof DS.Model);
});
