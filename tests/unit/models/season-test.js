import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('season', 'Season Model', {
  needs: [
    'model:round',
    'model:practice',
    'model:practice-session',
    'model:best-sector',
    'model:speed-trap',
    'model:practice-result',
    'model:qualify',
    'model:qualify-session',
    'model:qualify-result',
    'model:race',
    'model:race-result',
    'model:fastest-lap',
    'model:pit-stop'
  ]
});

test('Season is a valid ember-data model', function(assert) {
  var store = this.store();
  var season = this.subject({year:'1999'});
  assert.ok(season);
  assert.ok(season instanceof DS.Model);

  Ember.run(function() {
    season.set('round', store.createRecord('round', {}));
  });

  assert.ok(season.get('round'));
  assert.ok(season.get('round') instanceof DS.Model);
});
