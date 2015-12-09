import Mirage from 'ember-cli-mirage';
import Driver from 'motorsports-stats-dot-com/mirage/helpers/drivers';
import CarNumber from 'motorsports-stats-dot-com/mirage/helpers/car-numbers';

export default Mirage.Factory.extend({
  car_number: CarNumber,
  driver: Driver,
  position: (i) => { return ++i; },
  sector: () => { return Math.floor(Math.random() * 3) + 1; },
  time: () => {
    const wholes = Math.floor(Math.random() * 1833) + 1;
    const fractions = Math.floor(Math.random() * 999) + 0;
    return wholes + '.' + fractions;
  }
});
