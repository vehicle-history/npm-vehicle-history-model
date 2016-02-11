var AbstractEvent = require('./abstractEvent').AbstractEvent;
var AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

var ChangeOwnerEvent = function ChangeOwnerEvent(type,
                                                 createdAt,
                                                 description,
                                                 firstOwner,
                                                 ownerType,
                                                 location) {
  AbstractEvent.call(this, type, createdAt, description);

  this.firstOwner = firstOwner;
  this.ownerType = ownerType;
  this.location = location;
};

var ChangeOwnerEventBuilder = function ChangeOwnerEventBuilder() {
  AbstractEventBuilder.call(this);
  var self = this;

  this.build = function () {
    return new ChangeOwnerEvent(
      self.type,
      self.createdAt,
      self.description,
      self.firstOwner,
      self.ownerType,
      self.location
    );
  };

};

module.exports = {
  ChangeOwnerEvent: ChangeOwnerEvent,
  ChangeOwnerEventBuilder: ChangeOwnerEventBuilder
};
