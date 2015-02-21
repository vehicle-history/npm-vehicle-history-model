var assert = require('assert-plus');
var date = require('../../date');
var logger = require('../../logger/logger').logger;
var ProductionEventBuilder = require('../../model/response/event/productionEvent').ProductionEventBuilder;
var EventEnum = require('../../enum/eventEnum').EventEnum;

var exports = {};

exports.build = function (event, productionYear) {
  logger.debug('build production event:', event);

  var formats = null;

  if (productionYear) {
    productionYear = productionYear + '-01-01';
  }
  else if (event && event.createdAt) {
    productionYear = event.createdAt;
  }

  var createdAt = date.parseIsoString(productionYear, formats);

  if (!createdAt) {
    return null;
  }

  return new ProductionEventBuilder()
    .withType(EventEnum.PRODUCTION)
    .withCreatedAt(createdAt)
    .withDescription('Rok produkcji: ' + createdAt)
    .build();
};

module.exports = exports;