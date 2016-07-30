export default function() {
  this.timing = 0; //no delay

  this.get('/seasons');
  this.get('rounds/:id');
  this.get('practices/:id', 'practice');
  this.get('practice_sessions/:id', 'practiceSession');
  this.get('qualifies/:id', 'qualify');
  this.get('/speed_traps', function(db, request) {
  this.get('qualify_sessions/:id', 'qualifySession');
  this.get('best_sectors', 'bestSector');
  this.get('fastest_laps', 'fastestLap');
  this.get('pit_stops', 'pitStop');
  this.get('best_sectors', 'bestSector');
    const queryParams = request.queryParams;

    if (!queryParams) {
      return { "speed-trap": db.speedTraps };
    } else {
      const type = queryParams.speed_trap_type;
      let response = db.speedTraps.where({"type": type});

      response.forEach(speedTrap => {
        delete speedTrap.type;
        return speedTrap;
      });
      return {
        "speedTrap": response
      };
    }
  });
  this.get('practice_results', 'practiceResult');
  this.get('qualify_results', 'qualifyResult');
  this.get('race_results', 'raceResult');
  this.get('races/:id', 'race');
}
