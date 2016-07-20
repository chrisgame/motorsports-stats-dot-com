import Mirage from 'ember-cli-mirage';
import CarNumber from 'motorsports-stats-dot-com/mirage/helpers/car-numbers';
import Driver from 'motorsports-stats-dot-com/mirage/helpers/drivers';
import TimeOfDay from 'motorsports-stats-dot-com/mirage/helpers/times-of-day';

export default Mirage.Factory.extend({
  car_number: CarNumber,
  driver: Driver,
  position: 0,
  speed: () => {
    const wholes = Math.floor(Math.random() * 400) + 0;
    const fractions = Math.floor(Math.random() * 9) + 0;
    return wholes + '.' + fractions;
  },
  time_of_day: TimeOfDay
});
