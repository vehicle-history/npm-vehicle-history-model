var AbstractEvent = require('./abstractEvent').AbstractEvent;
var AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

var DeregistrationEvent = function DeregistrationEvent(type, createdAt, description, note) {
  AbstractEvent.call(this, type, createdAt, description);

  this.note = note;
};

var DeregistrationEventBuilder = function DeregistrationEventBuilder() {
  AbstractEventBuilder.call(this);
  var self = this;

  this.build = function () {
    return new DeregistrationEvent(
      self.type,
      self.createdAt,
      self.description,
      self.note
    );
  };

};

module.exports = exports = {
  DeregistrationEvent: DeregistrationEvent,
  DeregistrationEventBuilder: DeregistrationEventBuilder
};
