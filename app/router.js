var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.route('f1-fastest-laps');
  this.route('multi-series-line');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
  this.route('seasons', {path: 'f1/seasons'});
  this.route('rounds', {path: 'f1/season/:season_id/rounds'});
  this.resource('f1', function(){
    this.resource('season', {path: 'season/:season_id'}, function(){
      this.resource('round', {path: 'round/:round_number'}, function(){
//        this.resource('practice', {path: 'practice'}, function(){
//          this.resource('result', {path: 'results'});
//          this.resource('best-sector', {path: 'best-sectors'});
//          this.resource('speed-trap', {path: 'speed-traps'});
//        });
//        this.resource('qualifying', {path: 'qualifying'}, function(){
//          this.resource('result', {path: 'results'});
//          this.resource('best-sector', {path: 'best-sectors'});
//          this.resource('speed-trap', {path: 'speed-traps'});
//        });
        this.resource('race', {path: 'race'}, function(){
          this.resource('result', {path: 'results'});
          this.resource('fastest-lap', {path: 'fastest-laps'});
          this.resource('pit-stop', {path: 'pit-stops'});
        });
      });
    });
  });
});

Router.reopen({
  location: 'history'
});

export default Router;
