var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('f1-fastest-laps');
  this.route('multi-series-line');


  this.route('seasons', {path: 'f1/seasons'});
  this.route('rounds', {path: 'f1/:season_id/rounds'});
  this.resource('f1', function(){
    this.resource('season', {path: ':season_id'}, function(){
      this.resource('round', {path: ':round'}, function(){
        this.resource('practice', {path: 'practice/:practice_id'}, function(){
          this.resource('practice-session', {path: 'practice-session/:practice_session_id'}, function(){
            this.resource('practice-best-sector', {path: 'best-sectors'});
            this.resource('practice-speed-trap', {path: 'speed-traps'});
            this.resource('practice-result', {path: 'results'});
          });
        });
        this.resource('qualify', {path: 'qualifying/:qualify_id'}, function(){
          this.resource('qualify-session', {path: 'qualifying-session/:qualify_session_id'}, function(){
            this.resource('qualify-best-sector', {path: 'best-sectors'});
            this.resource('qualify-speed-trap', {path: 'speed-traps'});
            this.resource('qualify-result', {path: 'results'});
          });
        });
        this.resource('race', {path: 'race/:race_id'}, function(){
          this.resource('race-fastest-lap', {path: 'fastest-laps'});
          this.resource('race-pit-stop', {path: 'pit-stops'});
          this.resource('race-result', {path: 'results'});
        });
      });
    });
  });
});

Router.reopen({
  location: 'history'
});

export default Router;
