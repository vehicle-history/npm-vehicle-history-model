var AbstractEvent = require('./abstractEvent').AbstractEvent;
var AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

var InspectionEvent = function InspectionEvent(type, createdAt, description, expireAt, mileage) {
  AbstractEvent.call(this, type, createdAt, description);

  this.expireAt = expireAt;
  this.mileage = mileage;
};

var InspectionEventBuilder = function InspectionEventBuilder() {
  AbstractEventBuilder.call(this);
  var self = this;

  this.build = function () {
    return new InspectionEvent(
      self.type,
      self.createdAt,
      self.description,
      self.expireAt,
      self.mileage
    );
  };

};

module.exports = exports = {
  InspectionEvent: InspectionEvent,
  InspectionEventBuilder: InspectionEventBuilder
};
