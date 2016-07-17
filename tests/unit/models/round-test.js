import DS from 'ember-data';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('round', 'Round Model', {
  needs: [
    'model:season',
    'model:practice',
    'model:practice-session',
    'model:qualify',
    'model:qualify-session',
    'model:race',
    'model:race-result',
    'model:fastest-lap',
    'model:pit-stop'
  ]
});

test('Round is a valid ember-data model', function(assert) {
  var round = this.subject();
  assert.ok(round);
  assert.ok(round instanceof DS.Model);
});
