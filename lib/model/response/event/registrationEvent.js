var AbstractEvent = require('./abstractEvent').AbstractEvent;

module.exports.RegistrationEvent = function RegistrationEvent(type, createdAt, abroad) {
  AbstractEvent.call(this, type, createdAt);

  this.abroadRegistration = abroad;
};
