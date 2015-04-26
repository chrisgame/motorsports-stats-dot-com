import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('race', 'Race Model', {
  needs: [
    'model:race',
    'model:practice',
    'model:qualify',
    'model:round',
    'model:season',
    'model:fastest-lap',
    'model:pit-stop',
    'model:race-result'
  ]
});

test('Race is a valid ember-data model', function(assert) {
  var race = this.subject();
  assert.ok(race);
  assert.ok(race instanceof DS.Model);
});
