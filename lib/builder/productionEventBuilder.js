var logger = require('../logger/logger').logger;
var ProductionEvent = require('../model/response/event/productionEvent').ProductionEvent;
var EventEnum = require('../enum/eventEnum').EventEnum;

var exports = {};

exports.build = function (createdAt) {
  logger.debug('build production event createdAt: %s', createdAt);
  return new ProductionEvent(EventEnum.Type.PRODUCTION, createdAt);
};

module.exports = exports;