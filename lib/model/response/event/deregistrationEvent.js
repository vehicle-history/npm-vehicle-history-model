var AbstractEvent = require('./abstractEvent').AbstractEvent;

module.exports.DeregistrationEvent = function DeregistrationEvent(type, createdAt, reason) {
  AbstractEvent.call(this, type, createdAt);

  this.note = reason;

  this.getNote = function () {
    return this.note;
  };
};
