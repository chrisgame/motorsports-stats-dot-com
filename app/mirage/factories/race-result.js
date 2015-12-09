import Mirage from 'ember-cli-mirage';
import CarNumber from 'motorsports-stats-dot-com/mirage/helpers/car-numbers';
import Driver from 'motorsports-stats-dot-com/mirage/helpers/drivers';
import Lap from 'motorsports-stats-dot-com/mirage/helpers/laps';
import Point from 'motorsports-stats-dot-com/mirage/helpers/points';
import Team from 'motorsports-stats-dot-com/mirage/helpers/teams';
import Retirement from 'motorsports-stats-dot-com/mirage/helpers/retirements';

export default Mirage.Factory.extend({
  car_number: CarNumber,
  driver: Driver,
  grid: (i) => { return ++i; },
  laps: Lap,
  points: Point,
  position: (i) => { return ++i; },
  team: Team,
  time_or_retirement: (i) => {
    if (i % 2 === 0) {
      const wholes = Math.floor(Math.random() * 120) + 0;
      const fractions = Math.floor(Math.random() * 999) + 0;
      return wholes + '.' + fractions;
    } else {
      return new Retirement(i);
    }
  }
});
