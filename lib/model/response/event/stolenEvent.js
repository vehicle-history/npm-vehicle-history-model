var AbstractEvent = require('./abstractEvent').AbstractEvent;
var AbstractEventBuilder = require('./abstractEvent').AbstractEventBuilder;

var StolenEvent = function StolenEvent(type, createdAt, description) {
  AbstractEvent.call(this, type, createdAt, description);
};

var StolenEventBuilder = function StolenEventBuilder() {
  AbstractEventBuilder.call(this);
  var self = this;

  this.build = function () {
    return new StolenEvent(
      self.type,
      self.createdAt,
      self.description
    );
  };

};

module.exports = exports = {
  StolenEvent: StolenEvent,
  StolenEventBuilder: StolenEventBuilder
};
