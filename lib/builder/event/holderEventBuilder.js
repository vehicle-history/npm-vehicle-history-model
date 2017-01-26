const assert = require('assert-plus');
require('../../date');
const logger = require('../../logger/logger').logger;
const ChangeOwnerEventBuilder = require('../../model/response/event/changeOwnerEvent').ChangeOwnerEventBuilder;

const build = function build(event) {
  logger.debug('build holder event:', event);

  assert.object(event, 'event');
  assert.string(event.type, 'event.type');
  assert.string(event.createdAt, 'event.createdAt');
  assert.string(event.description, 'event.description');

  return new ChangeOwnerEventBuilder()
    .withType(event.type)
    .withCreatedAt(event.createdAt)
    .withDescription(event.description)
    .withOwnerType(event.ownerType)
    .build();
};

module.exports = {
  build: build
};
