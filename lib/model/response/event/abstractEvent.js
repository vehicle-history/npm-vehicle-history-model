var AbstractEvent = function AbstractEvent(type, createdAt, description) {
  this.type = type;
  this.createdAt = createdAt;
  this.description = description;
  this.note = null;
  this.firstOwner = null;
  this.ownerType = null;
  this.location = null;
  this.expireAt = null;
  this.abroadRegistration = null;
  this.mileage = null;
};

var AbstractEventBuilder = function AbstractEventBuilder() {
  this.type = null;
  this.createdAt = null;
  this.description = null;
  this.note = null;
  this.firstOwner = null;
  this.ownerType = null;
  this.location = null;
  this.expireAt = null;
  this.abroadRegistration = null;
  this.mileage = null;

  var self = this;

  this.withType = function (type) {
    self.type = type;
    return self;
  };

  this.withCreatedAt = function (createdAt) {
    self.createdAt = createdAt;
    return self;
  };

  this.withDescription = function (description) {
    self.description = description;
    return self;
  };

  this.withNote = function (note) {
    self.note = note;
    return self;
  };

  this.withFirstOwner = function (firstOwner) {
    self.firstOwner = firstOwner;
    return self;
  };

  this.withOwnerType = function (ownerType) {
    self.ownerType = ownerType;
    return self;
  };

  this.withLocation = function (location) {
    self.location = location;
    return self;
  };

  this.withExpireAt = function (expireAt) {
    self.expireAt = expireAt;
    return self;
  };

  this.withAbroadRegistration = function (abroadRegistration) {
    self.abroadRegistration = abroadRegistration;
    return self;
  };

  this.withMileage = function (mileage) {
    self.mileage = mileage;
    return self;
  };

};

module.exports = exports = {
  AbstractEvent: AbstractEvent,
  AbstractEventBuilder: AbstractEventBuilder
};
