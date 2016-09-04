export default function(server) {
  server.logging = true;

  const practiceBestSectors = server.createList('bestSector', 26);
  const practiceResults = server.createList('practiceResult', 26);
  let practiceSpeedTrapPositionId = 0;
  const practiceSpeedTraps = server.createList('speedTrap', 26, {
    position: () => { return ++practiceSpeedTrapPositionId; },
    type: "practice"
  });

  const qualifyBestSectors = server.createList('bestSector', 26);
  const qualifyResults = server.createList('qualifyResult', 25);
  let qualifySpeedTrapPositionId = 0;
  const qualifySpeedTraps = server.createList('speedTrap', 26, {
    position: () => { return ++qualifySpeedTrapPositionId; },
    type: "qualify"
  });

  const fastestLaps = server.createList('fastestLap', 26);
  const raceResults = server.createList('raceResult', 26);
  const pitStops = server.createList('pitStop', 26);

  const practiceSessions = server.createList('practiceSession', 1, {
    practiceBestSectors,
    practiceResults,
    practiceSpeedTraps
  });
  const qualifySessions = server.createList('qualifySession', 1, {
    qualifyBestSectors,
    qualifyResults,
    qualifySpeedTraps
  });

  const practice = server.create('practice', {
    practiceSessions
  });
  const qualify = server.create('qualify', {
    qualifySessions
  });
  const race = server.create('race', {
    fastestLaps,
    pitStops,
    raceResults
  });

  const rounds = server.createList('round', 21, {
    practiceId,
    qualifyId,
    raceId
  });

  //62
  //67
  server.createList('season', 67, {
    id: (i) => {
      return 2016 - i;
    },
    rounds
  });
}
