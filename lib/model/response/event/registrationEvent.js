const AbstractEvent = require('./abstractEvent').AbstractEvent;
const AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

class RegistrationEvent extends AbstractEvent {
  constructor(type, createdAt, description, abroad) {
    super(type, createdAt, description);

    this.abroadRegistration = abroad;
  }
}

class RegistrationEventBuilder extends AbstractEventBuilder {
  constructor() {
    super();
  }

  build() {
    return new RegistrationEvent(
      this.type,
      this.createdAt,
      this.description,
      this.abroadRegistration
    );
  }
}

module.exports = {
  RegistrationEvent: RegistrationEvent,
  RegistrationEventBuilder: RegistrationEventBuilder
};
