class AbstractEvent {
  constructor(type, createdAt, description) {
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
  }
}

class AbstractEventBuilder {
  constructor() {
    this.type = null;
    this.createdAt = null;
    this.description = null;
    this.expireAt = null;
    this.note = null;
    this.firstOwner = null;
    this.ownerType = null;
    this.location = null;
    this.abroadRegistration = null;
    this.mileage = null;
  }

  withType(type) {
    this.type = type;
    return this;
  }

  withCreatedAt(createdAt) {
    this.createdAt = createdAt;
    return this;
  }

  withExpireAt(expireAt) {
    this.expireAt = expireAt;
    return this;
  }

  withDescription(description) {
    this.description = description;
    return this;
  }

  withNote(note) {
    this.note = note;
    return this;
  }

  withFirstOwner(firstOwner) {
    this.firstOwner = firstOwner;
    return this;
  }

  withOwnerType(ownerType) {
    this.ownerType = ownerType;
    return this;
  }

  withLocation(location) {
    this.location = location;
    return this;
  }

  withAbroadRegistration(abroadRegistration) {
    this.abroadRegistration = abroadRegistration;
    return this;
  }

  withMileage(mileage) {
    this.mileage = mileage;
    return this;
  }

  build() {
    return new AbstractEvent(
      this.type,
      this.createdAt,
      this.expireAt,
      this.note,
      this.firstOwner,
      this.ownerType,
      this.location,
      this.abroadRegistration,
      this.mileage
    );
  }
}

module.exports = {
  AbstractEvent: AbstractEvent,
  AbstractEventBuilder: AbstractEventBuilder
};
