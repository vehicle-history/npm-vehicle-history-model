var assert = require('assert-plus');
require('../../date');
var logger = require('../../logger/logger').logger;
var InspectionEventBuilder = require('../../model/response/event/inspectionEvent').InspectionEventBuilder;

var build = function build(event) {
  logger.debug('build inspection event:', event);

  assert.object(event, 'event');
  assert.string(event.type, 'event.type');
  assert.string(event.createdAt, 'event.createdAt');
  assert.string(event.description, 'event.description');

  return new InspectionEventBuilder()
    .withType(event.type)
    .withCreatedAt(event.createdAt)
    .withDescription(event.description)
    .withExpireAt(event.expireAt)
    .withMileage(event.mileage)
    .build();
};

module.exports = {
  build: build
};
