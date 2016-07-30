import Mirage from 'ember-cli-mirage';
import Driver from 'motorsports-stats-dot-com/mirage/helpers/drivers';
import CarNumber from 'motorsports-stats-dot-com/mirage/helpers/car-numbers';
import Team from 'motorsports-stats-dot-com/mirage/helpers/teams';
import TimeOfDay from 'motorsports-stats-dot-com/mirage/helpers/times-of-day';
import Laps from 'motorsports-stats-dot-com/mirage/helpers/laps';

export default Mirage.Factory.extend({
  carNumber: CarNumber,
  driver: Driver,
  lap: Laps,
  raceId: 898,
  stops: () => { return Math.floor(Math.random() * 6) + 1; },
  team: Team,
  time: () => {
    const wholes = Math.floor(Math.random() * 99) + 0;
    const fractions = Math.floor(Math.random() * 999) + 0;
    return wholes + '.' + fractions;
  },

  timeOfDay: TimeOfDay,
  totalPitTime: () => {
    const wholes = Math.floor(Math.random() * 99) + 0;
    const fractions = Math.floor(Math.random() * 999) + 0;
    return wholes + '.' + fractions;
  }
});
