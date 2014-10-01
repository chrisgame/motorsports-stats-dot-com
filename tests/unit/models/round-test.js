import DS from 'ember-data';
import Ember from 'ember';
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

test('Round is a valid ember-data model', function() {
  var round = this.subject();
  ok(round);
  ok(round instanceof DS.Model);
});
