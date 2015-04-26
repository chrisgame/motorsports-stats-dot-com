import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('qualify-result', 'Qualify Result', {
  needs: [
  'model:qualify',
  'model:qualify-session',
  'model:best-sector',
  'model:speed-trap',
  'model:qualify-result'
  ]
});

test('Qualify result is a valid ember data model', function(assert) {
  var qualifyResult = this.subject();
  assert.ok(qualifyResult);
  assert.ok(qualifyResult instanceof DS.Model);
});
