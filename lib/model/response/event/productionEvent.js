const AbstractEvent = require('./abstractEvent').AbstractEvent;
const AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

class ProductionEvent extends AbstractEvent {
  constructor(type, createdAt, description) {
    super(type, createdAt, description);
  }
}

class ProductionEventBuilder extends AbstractEventBuilder {
  constructor() {
    super();
  }

  build() {
    return new ProductionEvent(
      this.type,
      this.createdAt,
      this.description
    );
  }
}

module.exports = {
  ProductionEvent: ProductionEvent,
  ProductionEventBuilder: ProductionEventBuilder
};
