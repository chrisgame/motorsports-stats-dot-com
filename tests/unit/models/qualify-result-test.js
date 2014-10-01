import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('qualify-result', 'Qualify Result', {
  needs: [
  'model:qualify-result',
  'model:qualify-session'
  ]
});

test('Qualify result is a valid ember data model', function() {
  var qualifyResult = this.subject();
  ok(qualifyResult);
  ok(qualifyResult instanceof DS.Model);
});
