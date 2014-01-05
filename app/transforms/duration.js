export default DS.Transform.extend({
  deserialize: function(serialized) {
    var duration = moment.duration(parseFloat(serialized), 'seconds');
    return serialized ? duration.minutes() + ':' + duration.seconds() + '.' + duration.milliseconds() : null;
  }
});
