var assert = require('assert-plus');
var date = require('../date');
var logger = require('../logger/logger').logger;
var DeregistrationEvent = require('../model/response/event/deregistrationEvent').DeregistrationEvent;
var EventEnum = require('../enum/eventEnum').EventEnum;

var exports = {};

exports.build = function (event, options) {
  logger.debug('build deregistration event:', event);

  assert.object(event, 'event');
  assert.string(event.date, 'event.date');
  assert.string(event.note, 'event.note');

  assert.object(options, 'options');

  return new DeregistrationEvent(
    EventEnum.DEREGISTRATION,
    date.parseIsoString(event.date),
    event.note
  );
};

module.exports = exports;