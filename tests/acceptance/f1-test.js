import { app, test } from 'ember-qunit';

app('Acceptance | F1 | Results flow', {
});

test('Navigation to a season', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    assert.equal(find('.seasons').length, 1, 'Page contains a list of seasons');
    assert.equal(find('.seasons li').length, 2, 'List contains two seasons');
  });
});

test('Navigation to a round of a season', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      assert.equal(find('.rounds').length, 1, 'Page contains a list of rounds');
      assert.equal(find('.rounds li').length, 19, 'List contains nineteen rounds');
    });
  });
});

test('Navigation to the session types of a round', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        assert.equal(find('.session-types').length, 1, 'Page contains a list of session types');
        assert.equal(find('.session-types li').length, 3, 'List contains three session types');
      });
    });
  });
});

test('Navigation to practice sessions', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:first a').then(function() {
          assert.equal(find('.practice-sessions').length, 1, 'Page contains a list of practice sessions');
          assert.equal(find('.practice-sessions li').length, 3, 'List contains three sessions');
        });
      });
    });
  });
});

test('Navigation to friday practice', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:first a').then(function() {
          click('.practice-sessions li:first a').then(function() {
            assert.equal(find('.practice-result-types').length, 1, 'Page contains a list of practice result types');
            assert.equal(find('.practice-result-types li').length, 3, 'List contains three sessions');
          });
        });
      });
    });
  });
});

test('Navigation to best sectors', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:first a').then(function() {
          click('.practice-sessions li:first a').then(function() {
            click('.practice-result-types li:first a').then(function() {
              assert.equal(find('.best-sectors').length, 1, 'Page contains a table of best sectors');
              assert.equal(find('.best-sectors tr').length, 55, 'Table contains fifty five rows');
            });
          });
        });
      });
    });
  });
});

test('Navigation to speed traps', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:first a').then(function() {
          click('.practice-sessions li:first a').then(function() {
            click('.practice-result-types li:nth-child(2) a').then(function() {
              assert.equal(find('.speed-traps').length, 1, 'Page contains a table of speed traps');
              assert.equal(find('.speed-traps tr').length, 22, 'Table contains twenty two rows');
            });
          });
        });
      });
    });
  });
});

test('Navigation to practice results', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:first a').then(function() {
          click('.practice-sessions li:first a').then(function() {
            click('.practice-result-types li:nth-child(3) a').then(function() {
              assert.equal(find('.practice-results').length, 1, 'Page contains a table of practice results');
              assert.equal(find('.practice-results tr').length, 23, 'Table contains twenty two rows');
            });
          });
        });
      });
    });
  });
});

test('Navigation to qualifying sessions', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:nth-child(2) a').then(function() {
          assert.equal(find('.qualifying-sessions').length, 1, 'Page contains a list of qualifying sessions');
          assert.equal(find('.qualifying-sessions li').length, 1, 'List contains one session');
        });
      });
    });
  });
});

test('Navigation to qualifying results', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:nth-child(2) a').then(function() {
          click('.qualifying-sessions li:first a').then(function() {
            click('.qualifying-result-types li:nth-child(3) a').then(function() {
              assert.equal(find('.qualifying-results').length, 1, 'Page contains a table of qualifying results');
              assert.equal(find('.qualifying-results tr').length, 23, 'Table contains twenty two rows');
            });
          });
        });
      });
    });
  });
});

test('Navigation to race sessions', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:last a').then(function() {
          assert.equal(find('.race-result-types').length, 1, 'Page contains a list of race sessions');
          assert.equal(find('.race-result-types li').length, 3, 'List contains three session');
        });
      });
    });
  });
});

test('Navigation to fastest laps', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:nth-child(3) a').then(function() {
          click('.race-result-types li:nth-child(1) a').then(function() {
            assert.equal(find('.fastest-laps').length, 1, 'Page contains a table of fastest laps');
            assert.equal(find('.fastest-laps tr').length, 21, 'Table contains twenty two rows');
          });
        });
      });
    });
  });
});

test('Navigation to pit stops', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:nth-child(3) a').then(function() {
          click('.race-result-types li:nth-child(2) a').then(function() {
            assert.equal(find('.pit-stops').length, 1, 'Page contains a table of pit stops');
            assert.equal(find('.pit-stops tr').length, 35, 'Table contains twenty two rows');
          });
        });
      });
    });
  });
});

test('Navigation to race results', function(assert) {
  assert.expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:nth-child(3) a').then(function() {
          click('.race-result-types li:nth-child(3) a').then(function() {
            assert.equal(find('.race-results').length, 1, 'Page contains a table of race results');
            assert.equal(find('.race-results tr').length, 23, 'Table contains twenty two rows');
          });
        });
      });
    });
  });
});
