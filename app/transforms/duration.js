import DS from 'ember-data';
import moment from 'moment';

export default DS.Transform.extend({
  deserialize(serialized) {
    var duration = moment.duration(parseFloat(serialized), 'seconds');
    return serialized ? duration.minutes() + ':' + duration.seconds() + '.' + duration.milliseconds() : null;
  }
});
