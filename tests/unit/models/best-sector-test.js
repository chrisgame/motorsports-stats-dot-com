import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('best-sector', 'Best Sector', {
  needs: [
  'model:best-sector'
  ]
});

test('Best sector is a vaild ember-data model', function() {
  var bestSector = this.subject();
  ok(bestSector);
  ok(bestSector instanceof DS.Model);
});
