import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('best-sector', 'Best Sector', {
  needs: [
  'model:best-sector'
  ]
});

test('Best sector is a vaild ember-data model', function(assert) {
  var bestSector = this.subject();
  assert.ok(bestSector);
  assert.ok(bestSector instanceof DS.Model);
});
