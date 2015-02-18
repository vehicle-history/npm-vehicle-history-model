var AbstractEvent = require('./abstractEvent').AbstractEvent;

module.exports.ChangeOwnerEvent = function ChangeOwnerEvent(type, createdAt, description, firstTime, ownerType, location) {
  AbstractEvent.call(this, type, createdAt, description);

  this.firstOwner = firstTime;
  this.ownerType = ownerType;
  this.location = location;
};
