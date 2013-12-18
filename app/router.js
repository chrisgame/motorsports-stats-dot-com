var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.route('f1-fastest-laps');
  this.route('multi-series-line');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
  this.resource('f1', function(){
    this.resource('season', {path: 'season/:season_id'}, function(){
      this.resource('race', {path: 'race/:race_number'}, function(){
        this.route('fastest-laps');
      });
    });
  });
});

export default Router;
