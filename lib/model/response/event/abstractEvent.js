module.exports.AbstractEvent = function AbstractEvent(type, createdAt) {
  this.type = type;
  this.createdAt = createdAt;

  this.getType = function () {
    return this.type;
  };


  this.getCreatedAt = function () {
    return this.createdAt;
  };
};
