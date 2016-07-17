import { test, moduleFor } from 'ember-qunit';

moduleFor('transform:duration', 'Duration Transform');

test('It exists', function(assert) {
  var transform = this.subject();
  assert.ok(transform);
});

test('An input of less than a second', function(assert) {
  var transform = this.subject();
  assert.equal(transform.deserialize('0.99'), '0:0.990');
});

test('An input of one second', function(assert) {
  var transform = this.subject();
  assert.equal(transform.deserialize('1'), '0:1.0');
});

test('An input of more than a second', function(assert) {
  var transform = this.subject();
  assert.equal(transform.deserialize('61'), '1:1.0');
});
