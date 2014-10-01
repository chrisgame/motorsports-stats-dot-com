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

test('Season is a valid ember-data model', function() {
  var store = this.store();
  var season = this.subject({year:'1999'});
  ok(season);
  ok(season instanceof DS.Model);

  Ember.run(function() {
    season.set('round', store.createRecord('round', {}));
  });

  ok(season.get('round'));
  ok(season.get('round') instanceof DS.Model);
});
