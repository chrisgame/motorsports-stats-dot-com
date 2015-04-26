import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('qualify', 'Qualify', {
  needs: [
  'model:season',
  'model:round',
  'model:practice',
  'model:qualify',
  'model:race',
  'model:qualify-session',
  'model:best-sector',
  'model:speed-trap',
  'model:qualify-result'
  ]
});

test('Qualify is a valid ember-data model', function(assert) {
  var qualify = this.subject();
  assert.ok(qualify);
  assert.ok(qualify instanceof DS.Model);
});
