var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.route('f1-fastest-laps');
  this.route('multi-series-line');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
