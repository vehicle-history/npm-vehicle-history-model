var AbstractEvent = require('./abstractEvent').AbstractEvent;
var AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

var ChangeOwnerEvent = function ChangeOwnerEvent(type, createdAt, description, ownerType) {
  AbstractEvent.call(this, type, createdAt, description);

  this.ownerType = ownerType;
};

var ChangeOwnerEventBuilder = function ChangeOwnerEventBuilder() {
  AbstractEventBuilder.call(this);
  var self = this;

  this.build = function () {
    return new ChangeOwnerEvent(
      self.type,
      self.createdAt,
      self.description,
      self.ownerType
    );
  };

};

module.exports = {
  ChangeOwnerEvent: ChangeOwnerEvent,
  ChangeOwnerEventBuilder: ChangeOwnerEventBuilder
};
