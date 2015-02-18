var AbstractEvent = require('./abstractEvent').AbstractEvent;

module.exports.InspectionEvent = function InspectionEvent(type, createdAt, description, expireAt, mileage) {
  AbstractEvent.call(this, type, createdAt, description);

  this.expireAt = expireAt;
  this.mileage = mileage;
};
