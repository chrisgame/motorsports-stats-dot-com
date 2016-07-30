import Mirage from 'ember-cli-mirage';
import Driver from 'motorsports-stats-dot-com/mirage/helpers/drivers';
import CarNumber from 'motorsports-stats-dot-com/mirage/helpers/car-numbers';
import Team from 'motorsports-stats-dot-com/mirage/helpers/teams';
import Laps from 'motorsports-stats-dot-com/mirage/helpers/laps';
import Retirement from 'motorsports-stats-dot-com/mirage/helpers/retirements';

export default Mirage.Factory.extend({
  carNumber: CarNumber,
  driver: Driver,
  gap: (i) => {
    if (i === 0) {
      return null;
    }
    const wholes = Math.floor(Math.random() * 60) + 0;
    const fractions = Math.floor(Math.random() * 999) + 0;
    return wholes + '.' + fractions;
  },
  laps: Laps,
  position: (i) => { return ++i; },
  practiceSessionId: 540,
  team: Team,
  timeOrRetirement: (i) => {
    if (i % 2 === 0) {
      const wholes = Math.floor(Math.random() * 120) + 0;
      const fractions = Math.floor(Math.random() * 999) + 0;
      return wholes + '.' + fractions;
    } else {
      return new Retirement(i);
    }
  }
});
