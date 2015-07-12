var assert = require('assert-plus');
require('../../date');
var logger = require('../../logger/logger').logger;
var DeregistrationEventBuilder = require('../../model/response/event/deregistrationEvent').DeregistrationEventBuilder;

var exports = {};

exports.build = function (event) {
  logger.debug('build deregistration event:', event);

  assert.object(event, 'event');
  assert.string(event.type, 'event.type');
  assert.string(event.createdAt, 'event.createdAt');
  assert.string(event.description, 'event.description');

  return new DeregistrationEventBuilder()
    .withType(event.type)
    .withCreatedAt(event.createdAt)
    .withDescription(event.description)
    .withNote(event.note)
    .build();
};

module.exports = exports;