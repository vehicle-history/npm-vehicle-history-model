const assert = require('assert-plus');
require('../../date');
const logger = require('../../logger/logger').logger;
const CoOwnerEventBuilder = require('../../model/response/event/coOwnerEvent').CoOwnerEventBuilder;

const build = function build(event) {
  logger.debug('build coOwner event:', event);

  assert.object(event, 'event');
  assert.string(event.type, 'event.type');
  assert.string(event.createdAt, 'event.createdAt');
  assert.string(event.description, 'event.description');

  return new CoOwnerEventBuilder()
    .withType(event.type)
    .withCreatedAt(event.createdAt)
    .withDescription(event.description)
    .withOwnerType(event.ownerType)
    .build();
};

module.exports = {
  build: build
};
