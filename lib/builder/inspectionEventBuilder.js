var logger = require('../logger/logger').logger;
var InspectionEvent = require('../model/response/event/inspectionEvent').InspectionEvent;
var EventEnum = require('../enum/eventEnum').EventEnum;

var exports = {};

exports.build = function (createdAt, expireAt) {
  logger.debug('build inspection event createdAt: %s', createdAt, expireAt);
  return new InspectionEvent(EventEnum.Type.INSPECTON, createdAt, expireAt);
};

module.exports = exports;