import Ember from 'ember';
import { test } from 'ember-qunit';
import StartApp from '../helpers/start-app';
var App;

module('F1 results flow', {
  setup: function() {
    App = new StartApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test('Navigation to a season', function() {
  expect(2);
  visit('/f1').then(function() {
    equal(find('.seasons').length, 1, 'Page contains a list of seasons');
    equal(find('.seasons li').length, 2, 'List contains two seasons');
  });
});

test('Navigation to a round of a season', function() {
  expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      equal(find('.rounds').length, 1, 'Page contains a list of rounds');
      equal(find('.rounds li').length, 19, 'List contains nineteen rounds');
    });
  });
});

test('Navigation to the session types of a round', function() {
  expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        equal(find('.session-types').length, 1, 'Page contains a list of session types');
        equal(find('.session-types li').length, 3, 'List contains three session types'); 
      });      
    });
  }); 
});

test('Navigation to practice sessions', function() {
  expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:first a').then(function() {
          equal(find('.practice-sessions').length, 1, 'Page contains a list of practice sessions');
          equal(find('.practice-sessions li').length, 3, 'List contains three sessions'); 
        });
      });      
    });
  });
});

test('Navigation to friday practice', function() {
  expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:first a').then(function() {
          click('.practice-sessions li:first a').then(function() {
            equal(find('.practice-result-types').length, 1, 'Page contains a list of practice result types');
            equal(find('.practice-result-types li').length, 3, 'List contains three sessions'); 
          });
        });
      });      
    });
  });
});

test('Navigation to best sectors', function() {
  expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:first a').then(function() {
          click('.practice-sessions li:first a').then(function() {
            click('.practice-result-types li:first a').then(function() {
              equal(find('.best-sectors').length, 1, 'Page contains a table of best sectors');
              equal(find('.best-sectors tr').length, 55, 'Table contains fifty five rows'); 
            });
          });
        });
      });      
    });
  });
});

test('Navigation to speed traps', function() {
  expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:first a').then(function() {
          click('.practice-sessions li:first a').then(function() {
            click('.practice-result-types li:nth-child(2) a').then(function() {
              equal(find('.speed-traps').length, 1, 'Page contains a table of speed traps');
              equal(find('.speed-traps tr').length, 22, 'Table contains twenty two rows'); 
            });
          });
        });
      });      
    });
  });
});

test('Navigation to practice results', function() {
  expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:first a').then(function() {
          click('.practice-sessions li:first a').then(function() {
            click('.practice-result-types li:nth-child(3) a').then(function() {
              equal(find('.practice-results').length, 1, 'Page contains a table of practice results');
              equal(find('.practice-results tr').length, 23, 'Table contains twenty two rows'); 
            });
          });
        });
      });      
    });
  });
});

test('Navigation to qualifying sessions', function() {
  expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:nth-child(2) a').then(function() {
          equal(find('.qualifying-sessions').length, 1, 'Page contains a list of qualifying sessions');
          equal(find('.qualifying-sessions li').length, 1, 'List contains one session'); 
        });
      });      
    });
  });
});

test('Navigation to qualifying results', function() {
  expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:nth-child(2) a').then(function() {
          click('.qualifying-sessions li:first a').then(function() {
            click('.qualifying-result-types li:nth-child(3) a').then(function() {
              equal(find('.qualifying-results').length, 1, 'Page contains a table of qualifying results');
              equal(find('.qualifying-results tr').length, 23, 'Table contains twenty two rows'); 
            });
          });
        });
      });      
    });
  });
});

test('Navigation to race sessions', function() {
  expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:last a').then(function() {
          equal(find('.race-result-types').length, 1, 'Page contains a list of race sessions');
          equal(find('.race-result-types li').length, 3, 'List contains three session'); 
        });
      });      
    });
  });
});

test('Navigation to fastest laps', function() {
  expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:nth-child(3) a').then(function() {
          click('.race-result-types li:nth-child(1) a').then(function() {
            equal(find('.fastest-laps').length, 1, 'Page contains a table of fastest laps');
            equal(find('.fastest-laps tr').length, 21, 'Table contains twenty two rows'); 
          });
        });
      });      
    });
  });
});

test('Navigation to pit stops', function() {
  expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:nth-child(3) a').then(function() {
          click('.race-result-types li:nth-child(2) a').then(function() {
            equal(find('.pit-stops').length, 1, 'Page contains a table of pit stops');
            equal(find('.pit-stops tr').length, 35, 'Table contains twenty two rows'); 
          });
        });
      });      
    });
  });
});

test('Navigation to race results', function() {
  expect(2);
  visit('/f1').then(function() {
    click('.seasons li:first a').then(function() {
      click('.rounds li:first a').then(function() {
        click('.session-types li:nth-child(3) a').then(function() {
          click('.race-result-types li:nth-child(3) a').then(function() {
            equal(find('.race-results').length, 1, 'Page contains a table of race results');
            equal(find('.race-results tr').length, 23, 'Table contains twenty two rows'); 
          });
        });
      });      
    });
  });
});
