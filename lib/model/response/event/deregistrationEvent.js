const AbstractEvent = require('./abstractEvent').AbstractEvent;
const AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

class DeregistrationEvent extends AbstractEvent {
  constructor(type, createdAt, description, note) {
    super(type, createdAt, description);

    this.note = note;
  }
}

class DeregistrationEventBuilder extends AbstractEventBuilder {
  constructor() {
    super();
  }

  build() {
    return new DeregistrationEvent(
      this.type,
      this.createdAt,
      this.description,
      this.note
    );
  }
}


module.exports = {
  DeregistrationEvent: DeregistrationEvent,
  DeregistrationEventBuilder: DeregistrationEventBuilder
};
