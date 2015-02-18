var assert = require('assert-plus');
var date = require('../date');
var logger = require('../logger/logger').logger;
var RegistrationEvent = require('../model/response/event/registrationEvent').RegistrationEvent;
var EventEnum = require('../enum/eventEnum').EventEnum;

var exports = {};

exports.build = function (event, options, abroad) {
  logger.debug('build registration event:', event);

  assert.object(event, 'event');
  assert.string(event.date, 'event.date');
  assert.string(event.description, 'event.description');

  assert.object(options, 'options');
  assert.bool(abroad, 'abroad');

  return new RegistrationEvent(
    EventEnum.REGISTRATION,
    date.parseIsoString(event.date),
    event.description,
    abroad
  );
};

module.exports = exports;