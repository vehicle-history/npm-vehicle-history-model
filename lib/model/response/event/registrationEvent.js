var AbstractEvent = require('./abstractEvent').AbstractEvent;

module.exports.RegistrationEvent = function RegistrationEvent(type, createdAt, abroad) {
  AbstractEvent.call(this, type, createdAt);

  this.abroad = abroad;

  this.getAbroad = function () {
    return this.abroad;
  };
};
