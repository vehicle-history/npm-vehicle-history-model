const AbstractEvent = require('./abstractEvent').AbstractEvent;
const AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

class StolenEvent extends AbstractEvent {
  constructor(type, createdAt, description) {
    super(type, createdAt, description);
  }
}

class StolenEventBuilder extends AbstractEventBuilder {
  constructor() {
    super();
  }

  build() {
    return new StolenEvent(
      this.type,
      this.createdAt,
      this.description
    );
  }
}

module.exports = {
  StolenEvent: StolenEvent,
  StolenEventBuilder: StolenEventBuilder
};
