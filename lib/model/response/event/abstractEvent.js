module.exports.AbstractEvent = function AbstractEvent(type, createdAt) {
  this.type = type;
  this.createdAt = createdAt;
  this.note = null;
  this.firstOwner = null;
  this.ownerType = null;
  this.location = null;
  this.expireAt = null;
  this.abroadRegistration = null;
  this.mileage = null;
};
