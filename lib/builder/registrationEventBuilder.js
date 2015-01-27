var date = require('../date');
var logger = require('../logger/logger').logger;
var RegistrationEvent = require('../model/response/event/registrationEvent').RegistrationEvent;
var EventEnum = require('../enum/eventEnum').EventEnum;

var exports = {};

exports.build = function (createdAt, abroad) {
  logger.debug('build registration event createdAt: %s', createdAt);
  return new RegistrationEvent(EventEnum.Type.REGISTRATION, date.parseIsoString(createdAt), abroad);
};

module.exports = exports;