import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('race', 'Race Model', {
  needs: [
    'model:race',
    'model:round',
    'model:fastest-lap',
    'model:pit-stop',
    'model:race-result'
  ]
});

test('Race is a valid ember-data model', function() {
  var race = this.subject();
  ok(race);
  ok(race instanceof DS.Model);
});
