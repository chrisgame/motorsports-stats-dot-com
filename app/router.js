import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('seasons', { path: 'f1/seasons' });
  this.route('rounds', { path: 'f1/season/:season_id/rounds' });
  this.route('f1', { resetNamespace: true }, function(){
    this.route('season', { resetNamespace: true, path: 'season/:season_id' }, function(){
      this.route('round', { resetNamespace: true, path: 'round/:round_id' }, function(){
        this.route('practice', { resetNamespace: true, path: 'practice/:practice_id' }, function(){
          this.route('practice-session', { resetNamespace: true, path: 'practice-session/:practice_session_id' }, function(){
            this.route('practice-best-sector', { resetNamespace: true, path: 'best-sectors' });
            this.route('practice-speed-trap', { resetNamespace: true, path: 'speed-traps' });
            this.route('practice-result', { resetNamespace: true, path: 'results' });
          });
        });
        this.route('qualify', { resetNamespace: true, path: 'qualifying/:qualify_id' }, function(){
          this.route('qualify-session', { resetNamespace: true, path: 'qualifying-session/:qualify_session_id' }, function(){
            this.route('qualify-best-sector', { resetNamespace: true, path: 'best-sectors' });
            this.route('qualify-speed-trap', { resetNamespace: true, path: 'speed-traps' });
            this.route('qualify-result', { resetNamespace: true, path: 'results' });
          });
        });
        this.route('race', { resetNamespace: true, path: 'race/:race_id' }, function(){
          this.route('race-fastest-lap', { resetNamespace: true, path: 'fastest-laps' });
          this.route('race-pit-stop', { resetNamespace: true, path: 'pit-stops' });
          this.route('race-result', { resetNamespace: true, path: 'results' });
        });
      });
    });
  });
});

export default Router;
