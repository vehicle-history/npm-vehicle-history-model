var assert = require('assert-plus');
var date = require('../../date');
var logger = require('../../logger/logger').logger;
var ChangeOwnerEventBuilder = require('../../model/response/event/changeOwnerEvent').ChangeOwnerEventBuilder;

var exports = {};

exports.build = function (event) {
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

module.exports = exports;