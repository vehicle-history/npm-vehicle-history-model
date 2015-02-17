var assert = require('assert-plus');
var date = require('../date');
var logger = require('../logger/logger').logger;
var ProductionEvent = require('../model/response/event/productionEvent').ProductionEvent;
var EventEnum = require('../enum/eventEnum').EventEnum;

var exports = {};

exports.build = function (event, options, productionYear) {
  logger.debug('build production event:', event);

  assert.object(options, 'options');

  var format = null;

  if (productionYear) {
    format = 'yyyy';
  }
  else if (event && event.date) {
    productionYear = event.date;
  }

  var productionDate = date.parseIsoString(productionYear, format);

  if (!productionDate) {
    return null;
  }

  return new ProductionEvent(
    EventEnum.PRODUCTION,
    productionDate,
      'Rok produkcji ' + productionDate
  );
};

module.exports = exports;