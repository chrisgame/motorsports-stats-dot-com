import DS from 'ember-data';
import Ember from 'ember';
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

test('Qualify session is a valid ember-data model', function() {
  var qualifySession = this.subject();
  ok(qualifySession);
  ok(qualifySession instanceof DS.Model);
});
