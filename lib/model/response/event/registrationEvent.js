var AbstractEvent = require('./abstractEvent').AbstractEvent;

module.exports.RegistrationEvent = function RegistrationEvent(type, createdAt, description, abroad) {
  AbstractEvent.call(this, type, createdAt, description);

  this.abroadRegistration = abroad;
};
