export default function(server) {
  const practiceBestSectors = server.createList('best-sector', 26);
  const practiceResults = server.createList('practice-result', 26);
  let practiceSpeedTrapPositionId = 0;
  const practiceSpeedTraps = server.createList('speed-trap', 26, {
    position: () => { return ++practiceSpeedTrapPositionId; },
    type: "practice"
  });

  const qualifyBestSectors = server.createList('best-sector', 26);
  const qualifyResults = server.createList('qualify-result', 26);
  let qualifySpeedTrapPositionId = 0;
  const qualifySpeedTraps = server.createList('speed-trap', 26, {
    position: () => { return ++qualifySpeedTrapPositionId; },
    type: "qualify"
  });

  const fastestLaps = server.createList('fastest-lap', 26);
  const raceResults = server.createList('race-result', 26);
  const pitStops = server.createList('pit-stop', 26);

  const practiceSessions = server.createList('practice-session', 1, {
    best_sector_ids: practiceBestSectors.mapBy('id'),
    practice_result_ids: practiceResults.mapBy('id'),
    speed_trap_ids: practiceSpeedTraps.mapBy('id')
  });
  const qualifySessions = server.createList('qualify-session', 1, {
    best_sector_ids: qualifyBestSectors.mapBy('id'),
    qualify_result: qualifyResults.mapBy('id'),
    speed_trap_ids: qualifySpeedTraps.mapBy('id')
  });

  const practice = server.create('practice', {
    practice_session_ids: practiceSessions.mapBy('id')
  });
  const qualify = server.create('qualify', {
    qualify_session_ids: qualifySessions.mapBy('id')
  });
  const race = server.create('race', {
    fastest_lap_ids: fastestLaps.mapBy('id'),
    pit_stop_ids: pitStops.mapBy('id'),
    race_result_ids: raceResults.mapBy('id')
  });

  server.logging = true;
  //62
  server.createList('season', 67, {
    id: (i) => {
      return 2016 - i;
    },
    round_ids: () => {
      const rounds = server.createList('round', 21, {
        practice_id: practice.id,
        qualify_id: qualify.id,
        race_id: race.id
      });

      return rounds.mapBy('id');
    }
  });
}
