var AbstractEvent = require('./abstractEvent').AbstractEvent;

module.exports.ChangeOwnerEvent = function ChangeOwnerEvent(type, createdAt, firstTime, ownerType, location) {
  AbstractEvent.call(this, type, createdAt);

  this.firstTime = firstTime;
  this.ownerType = ownerType;
  this.location = location;

  this.getFirstTime = function () {
    return this.firstTime;
  };

  this.getOwnerType = function () {
    return this.ownerType;
  };

  this.getLocation = function () {
    return this.location;
  };
};
