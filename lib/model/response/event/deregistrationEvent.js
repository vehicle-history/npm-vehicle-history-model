var AbstractEvent = require('./abstractEvent').AbstractEvent;

module.exports.DeregistrationEvent = function DeregistrationEvent(type, createdAt, description, reason) {
  AbstractEvent.call(this, type, createdAt, description);

  this.note = reason;
};
