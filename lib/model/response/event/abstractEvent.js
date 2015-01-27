module.exports.AbstractEvent = function AbstractEvent(type, createdAt) {
  this.type = type;
  this.createdAt = createdAt;
  this.reason = null;
  this.firstTime = null;
  this.ownerType = null;
  this.location = null;
  this.expireAt = null;
  this.abroad = null;

  this.getType = function () {
    return this.type;
  };

  this.getCreatedAt = function () {
    return this.createdAt;
  };
};
