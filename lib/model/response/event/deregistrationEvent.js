var AbstractEvent = require('./abstractEvent').AbstractEvent;

module.exports.DeregistrationEvent = function DeregistrationEvent(type, createdAt, reason) {
  AbstractEvent.call(this, type, createdAt);

  this.reason = reason;

  this.getReason = function () {
    return this.reason;
  };
};
