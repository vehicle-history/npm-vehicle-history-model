var assert = require('assert-plus');
require('../../date');
var logger = require('../../logger/logger').logger;
var ChangedRegistrationLocationEventBuilder = require('../../model/response/event/changedRegistrationLocationEvent').ChangedRegistrationLocationEventBuilder;

var build = function build(event) {
  logger.debug('build change registration location event:', event);

  assert.object(event, 'event');
  assert.string(event.type, 'event.type');
  assert.string(event.createdAt, 'event.createdAt');
  assert.string(event.description, 'event.description');

  return new ChangedRegistrationLocationEventBuilder()
    .withType(event.type)
    .withCreatedAt(event.createdAt)
    .withDescription(event.description)
    .withLocation(event.location)
    .build();
};

module.exports = {
  build: build
};
