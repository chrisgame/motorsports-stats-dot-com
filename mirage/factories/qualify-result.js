import Mirage from 'ember-cli-mirage';
import CarNumber from 'motorsports-stats-dot-com/mirage/helpers/car-numbers';
import Driver from 'motorsports-stats-dot-com/mirage/helpers/drivers';
import Lap from 'motorsports-stats-dot-com/mirage/helpers/laps';
import LapTime from 'motorsports-stats-dot-com/mirage/helpers/lap-times';
import Team from 'motorsports-stats-dot-com/mirage/helpers/teams';
import Retirement from 'motorsports-stats-dot-com/mirage/helpers/retirements';

export default Mirage.Factory.extend({
  carNumber: CarNumber,
  driver: Driver,
  laps: Lap,
  position:  (i) => { return ++i; },
  q1: LapTime,
  q2: LapTime,
  q3: LapTime,
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
