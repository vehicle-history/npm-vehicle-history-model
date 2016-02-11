var AbstractEvent = require('./abstractEvent').AbstractEvent;
var AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

var ChangedRegistrationLocationEvent = function ChangedRegistrationLocationEvent(type,
                                                                                 createdAt,
                                                                                 description,
                                                                                 location) {
  AbstractEvent.call(this, type, createdAt, description);

  this.location = location;
};

var ChangedRegistrationLocationEventBuilder = function ChangedRegistrationLocationEventBuilder() {
  AbstractEventBuilder.call(this);
  var self = this;

  this.build = function () {
    return new ChangedRegistrationLocationEvent(
      self.type,
      self.createdAt,
      self.description,
      self.location
    );
  };

};

module.exports = {
  ChangedRegistrationLocationEvent: ChangedRegistrationLocationEvent,
  ChangedRegistrationLocationEventBuilder: ChangedRegistrationLocationEventBuilder
};
