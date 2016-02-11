var assert = require('assert-plus');
require('../../date');
var logger = require('../../logger/logger').logger;
var StolenEventBuilder = require('../../model/response/event/stolenEvent').StolenEventBuilder;

var build = function build(event) {
  logger.debug('build stolen event:', event);

  assert.object(event, 'event');
  assert.string(event.type, 'event.type');
  assert.string(event.createdAt, 'event.createdAt');
  assert.string(event.description, 'event.description');

  return new StolenEventBuilder()
    .withType(event.type)
    .withCreatedAt(event.createdAt)
    .withDescription(event.description)
    .build();
};

module.exports = {
  build: build
};
