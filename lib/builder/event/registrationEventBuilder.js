var assert = require('assert-plus');
require('../../date');
var logger = require('../../logger/logger').logger;
var RegistrationEventBuilder = require('../../model/response/event/registrationEvent').RegistrationEventBuilder;
var EventEnum = require('../../enum/eventEnum').EventEnum;

var exports = {};

exports.build = function (event) {
  logger.debug('build registration event:', event);

  assert.object(event, 'event');
  assert.string(event.type, 'event.type');
  assert.string(event.createdAt, 'event.createdAt');
  assert.string(event.description, 'event.description');

  return new RegistrationEventBuilder()
    .withType(EventEnum.REGISTRATION)
    .withCreatedAt(event.createdAt)
    .withDescription(event.description)
    .withAbroadRegistration(event.abroadRegistration)
    .build();
};

module.exports = exports;