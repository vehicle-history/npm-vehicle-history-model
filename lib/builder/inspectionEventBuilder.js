var date = require('../date');
var logger = require('../logger/logger').logger;
var InspectionEvent = require('../model/response/event/inspectionEvent').InspectionEvent;
var EventEnum = require('../enum/eventEnum').EventEnum;

var exports = {};

exports.build = function (createdAt, expireAt) {
  logger.debug('build inspection event createdAt: %s', createdAt);
  return new InspectionEvent(
    EventEnum.Type.INSPECTON,
    date.parseIsoString(createdAt),
    date.parseIsoString(expireAt)
  );
};

module.exports = exports;