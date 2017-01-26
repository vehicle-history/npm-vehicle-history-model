const AbstractEvent = require('./abstractEvent').AbstractEvent;
const AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

class CoOwnerEvent extends AbstractEvent {
  constructor(type, createdAt, description, ownerType) {
    super(type, createdAt, description);

    this.ownerType = ownerType;
  }
}

class CoOwnerEventBuilder extends AbstractEventBuilder {
  constructor() {
    super();
  }

  build() {
    return new CoOwnerEvent(
      this.type,
      this.createdAt,
      this.description,
      this.ownerType
    );
  }
}

module.exports = {
  CoOwnerEvent: CoOwnerEvent,
  CoOwnerEventBuilder: CoOwnerEventBuilder
};
