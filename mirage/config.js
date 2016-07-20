export default function() {
  this.timing = 0; //no delay

  this.get('/seasons');
  this.get('rounds/:id');
  this.get('practices/:id', 'practice');
  this.get('practice_sessions/:id', 'practice-session');
  this.get('qualifies/:id', 'qualify');
  this.get('qualify_sessions/:id', 'qualify-session');
  this.get('best_sectors', 'best-sector');
  this.get('fastest_laps', 'fastest-lap');
  this.get('pit_stops', 'pit-stop');
  this.get('best_sectors', 'best-sector');
  this.get('/speed_traps', function(db, request) {
    const queryParams = request.queryParams;

    if (!queryParams) {
      return { "speed-trap": db['speed-traps'] };
    } else {
      const type = queryParams.speed_trap_type;
      let response = db['speed-traps'].where({"type": type});

      response.forEach(speedTrap => {
        delete speedTrap.type;
        return speedTrap;
      });
      return {
        "speed-trap": response
      };
    }
  });
  this.get('practice_results', 'practice-result');
  this.get('qualify_results', 'qualify-result');
  this.get('race_results', 'race-result');
  this.get('races/:id', 'race');
}
