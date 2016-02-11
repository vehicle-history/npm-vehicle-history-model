var AbstractEvent = require('./abstractEvent').AbstractEvent;
var AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

var RegistrationEvent = function RegistrationEvent(type, createdAt, description, abroad) {
  AbstractEvent.call(this, type, createdAt, description);

  this.abroadRegistration = abroad;
};

var RegistrationEventBuilder = function RegistrationEventBuilder() {
  AbstractEventBuilder.call(this);
  var self = this;

  this.build = function () {
    return new RegistrationEvent(
      self.type,
      self.createdAt,
      self.description,
      self.abroadRegistration
    );
  };

};

module.exports = {
  RegistrationEvent: RegistrationEvent,
  RegistrationEventBuilder: RegistrationEventBuilder
};
