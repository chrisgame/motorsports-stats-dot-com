import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('practice-result', 'Practice Result', {
  needs: [
  'model:practice-result',
  'model:practice-session'
  ]
});

test('Practice result is a valid ember-data model', function() {
  var practiceResult = this.subject();
  ok(practiceResult);
  ok(practiceResult instanceof DS.Model);
});
