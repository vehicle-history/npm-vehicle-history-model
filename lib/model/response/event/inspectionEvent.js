var AbstractEvent = require('./abstractEvent').AbstractEvent;

module.exports.InspectionEvent = function InspectionEvent(type, createdAt, expireAt) {
  AbstractEvent.call(this, type, createdAt);

  this.expireAt = expireAt;

  this.getExpireAt = function () {
    return this.expireAt;
  };
};
