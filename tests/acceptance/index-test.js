import { test } from 'qunit';
import moduleForAcceptance from 'test-percy/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');
  percySnapshot(assert);
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
