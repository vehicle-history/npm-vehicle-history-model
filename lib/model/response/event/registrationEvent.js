var AbstractEvent = require('./abstractEvent').AbstractEvent;
var AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

var RegistrationEvent = function RegistrationEvent(type, createdAt, description, abroadRegistration) {
  AbstractEvent.call(this, type, createdAt, description);

  this.abroadRegistration = abroadRegistration;
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

module.exports = exports = {
  RegistrationEvent: RegistrationEvent,
  RegistrationEventBuilder: RegistrationEventBuilder
};
