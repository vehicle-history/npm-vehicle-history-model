var AbstractEvent = require('./abstractEvent').AbstractEvent;
var AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

var ProductionEvent = function ProductionEvent(type, createdAt, description) {
  AbstractEvent.call(this, type, createdAt, description);
};

var ProductionEventBuilder = function ProductionEventBuilder() {
  AbstractEventBuilder.call(this);
  var self = this;

  this.build = function () {
    return new ProductionEvent(
      self.type,
      self.createdAt,
      self.description
    );
  };

};

module.exports = {
  ProductionEvent: ProductionEvent,
  ProductionEventBuilder: ProductionEventBuilder
};
