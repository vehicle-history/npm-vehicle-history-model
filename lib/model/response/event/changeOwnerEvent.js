const AbstractEvent = require('./abstractEvent').AbstractEvent;
const AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

class ChangeOwnerEvent extends AbstractEvent {
  constructor(type, createdAt, description, firstOwner, ownerType, location) {
    super(type, createdAt, description);

    this.firstOwner = firstOwner;
    this.ownerType = ownerType;
    this.location = location;
  }
}

class ChangeOwnerEventBuilder extends AbstractEventBuilder {
  constructor() {
    super();
  }

  build() {
    return new ChangeOwnerEvent(
      this.type,
      this.createdAt,
      this.description,
      this.firstOwner,
      this.ownerType,
      this.location
    );
  }
}

module.exports = {
  ChangeOwnerEvent: ChangeOwnerEvent,
  ChangeOwnerEventBuilder: ChangeOwnerEventBuilder
};
