export default function(server) {
  const practiceBestSectors = server.createList('bestSector', 26);
  //const practiceResults = server.createList('practiceResult', 26);
  let practiceSpeedTrapPositionId = 0;
  const practiceSpeedTraps = server.createList('speedTrap', 26, {
    position: () => { return ++practiceSpeedTrapPositionId; },
    type: "practice"
  });

  const qualifyBestSectors = server.createList('bestSector', 26);
  //const qualifyResults = server.createList('qualifyResult', 25);
  let qualifySpeedTrapPositionId = 0;
  const qualifySpeedTraps = server.createList('speedTrap', 26, {
    position: () => { return ++qualifySpeedTrapPositionId; },
    type: "qualify"
  });

  const fastestLaps = server.createList('fastestLap', 26);
  const raceResults = server.createList('raceResult', 26);
  const pitStops = server.createList('pitStop', 26);

  const practiceSessions = server.createList('practiceSession', 1, {
    bestSectorIds: practiceBestSectors.mapBy('id'),
    //practiceResultIds: practiceResults.mapBy('id'),
    speedTrapIds: practiceSpeedTraps.mapBy('id')
  });
  const qualifySessions = server.createList('qualifySession', 1, {
    bestSectorIds: qualifyBestSectors.mapBy('id'),
    //qualifyResultIds: qualifyResults.mapBy('id'),
    speedTrapIds: qualifySpeedTraps.mapBy('id')
  });

  const practice = server.create('practice', {
    practiceSessionIds: practiceSessions.mapBy('id')
  });
  const qualify = server.create('qualify', {
    qualifySessionIds: qualifySessions.mapBy('id')
  });
  const race = server.create('race', {
    fastestLapIds: fastestLaps.mapBy('id'),
    pitStopIds: pitStops.mapBy('id'),
    raceResultIds: raceResults.mapBy('id')
  });

  server.logging = true;
  //62
  //67
  server.createList('season', 1, {
    id: (i) => {
      return 2016 - i;
    },
    //21
    round_ids: () => {
      const rounds = server.createList('round', 1, {
        practiceId: practice.id,
        qualifyId: qualify.id,
        raceId: race.id
      });

      return rounds.mapBy('id');
    }
  });

  debugger;
}
