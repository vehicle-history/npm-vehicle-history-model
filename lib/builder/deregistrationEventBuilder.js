var date = require('../date');
var logger = require('../logger/logger').logger;
var DeregistrationEvent = require('../model/response/event/deregistrationEvent').DeregistrationEvent;
var EventEnum = require('../enum/eventEnum').EventEnum;

var exports = {};

exports.build = function (createdAt, reason) {
  logger.debug('build deregistration event createdAt: %s', createdAt);
  return new DeregistrationEvent(EventEnum.Type.DEREGISTRATION, date.parseIsoString(createdAt), reason);
};

module.exports = exports;