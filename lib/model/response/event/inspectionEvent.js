const AbstractEvent = require('./abstractEvent').AbstractEvent;
const AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

class InspectionEvent extends AbstractEvent {
  constructor(type, createdAt, description, expireAt, mileage) {
    super(type, createdAt, description);

    this.expireAt = expireAt;
    this.mileage = mileage;
  }
}

class InspectionEventBuilder extends AbstractEventBuilder {
  constructor() {
    super();
  }

  build() {
    return new InspectionEvent(
      this.type,
      this.createdAt,
      this.description,
      this.expireAt,
      this.mileage
    );
  }
}

module.exports = {
  InspectionEvent: InspectionEvent,
  InspectionEventBuilder: InspectionEventBuilder
};
