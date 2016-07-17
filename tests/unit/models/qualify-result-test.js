import DS from 'ember-data';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('qualify-result', 'Qualify Result', {
  needs: [
  'model:qualify-result',
  'model:qualify-session'
  ]
});

test('Qualify result is a valid ember data model', function(assert) {
  var qualifyResult = this.subject();
  assert.ok(qualifyResult);
  assert.ok(qualifyResult instanceof DS.Model);
});
