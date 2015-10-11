import DS from 'ember-data';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('qualify-session', 'Qualify Session', {
  needs: [
  'model:qualify-session',
  'model:qualify',
  'model:best-sector',
  'model:speed-trap',
  'model:qualify-result'
  ]
});

test('Qualify session is a valid ember-data model', function(assert) {
  var qualifySession = this.subject();
  assert.ok(qualifySession);
  assert.ok(qualifySession instanceof DS.Model);
});
