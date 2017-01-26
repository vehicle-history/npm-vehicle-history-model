const assert = require('assert-plus');
require('../../date');
const logger = require('../../logger/logger').logger;
const RegistrationEventBuilder = require('../../model/response/event/registrationEvent').RegistrationEventBuilder;
const EventEnum = require('../../enum/eventEnum').EventEnum;

const build = function build(event) {
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

module.exports = {
  build: build
};
