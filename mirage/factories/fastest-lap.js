import Mirage from 'ember-cli-mirage';
import Driver from 'motorsports-stats-dot-com/mirage/helpers/drivers';
import CarNumber from 'motorsports-stats-dot-com/mirage/helpers/car-numbers';
import Team from 'motorsports-stats-dot-com/mirage/helpers/teams';
import TimeOfDay from 'motorsports-stats-dot-com/mirage/helpers/times-of-day';
import Laps from 'motorsports-stats-dot-com/mirage/helpers/laps';

export default Mirage.Factory.extend({
  averageSpeed: () => {
    const wholes = Math.floor(Math.random() * 300) + 0;
    const fractions = Math.floor(Math.random() * 999) + 0;
    return wholes + '.' + fractions;
  },
  carNumber: CarNumber,
  driver: Driver,
  lap: Laps,
  position: (i) => { return ++i; },
  raceId: 898,
  team: Team,
  time: () => {
    const wholes = Math.floor(Math.random() * 99) + 0;
    const fractions = Math.floor(Math.random() * 999) + 0;
    return wholes + '.' + fractions;
  },
  timeOfDay: TimeOfDay
});
