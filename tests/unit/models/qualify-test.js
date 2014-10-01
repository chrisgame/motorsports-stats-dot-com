import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('qualify', 'Qualify', {
  needs: [
  'model:qualify',
  'model:round',
  'model:qualify-session'
  ]
});

test('Qualify is a valid ember-data model', function() {
  var qualify = this.subject();
  ok(qualify);
  ok(qualify instanceof DS.Model);
});
