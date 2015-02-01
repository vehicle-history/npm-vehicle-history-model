var AbstractEvent = require('./abstractEvent').AbstractEvent;

module.exports.InspectionEvent = function InspectionEvent(type, createdAt, expireAt, mileage) {
  AbstractEvent.call(this, type, createdAt);

  this.expireAt = expireAt;
  this.mileage = mileage;
};
