const AbstractEvent = require('./abstractEvent').AbstractEvent;
const AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

class ChangedRegistrationLocationEvent extends AbstractEvent {
  constructor(type, createdAt, description, location) {
    super(type, createdAt, description);

    this.location = location;
  }
}

class ChangedRegistrationLocationEventBuilder extends AbstractEventBuilder {
  constructor() {
    super();
  }

  build() {
    return new ChangedRegistrationLocationEvent(
      this.type,
      this.createdAt,
      this.description,
      this.location
    );
  }
}

module.exports = {
  ChangedRegistrationLocationEvent: ChangedRegistrationLocationEvent,
  ChangedRegistrationLocationEventBuilder: ChangedRegistrationLocationEventBuilder
};
