import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('practice', 'Practice', {
  needs: [
  'model:practice',
  'model:round',
  'model:practice-session'
  ]
});

test('Practice is a valid ember-data model', function() {
  var practiceSession = this.subject();
  ok(practiceSession);
  ok(practiceSession instanceof DS.Model);
});
