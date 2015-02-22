var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var Production = require('../../model/response/vehicle/production').Production;
var mapHelper = require('./../../mapHelper');
var carProductionResolver = require('./../../resolver/vehicle/carProductionResolver');

var exports = {};

exports.build = function (map) {
  assert.object(map, 'map');

  var year = mapHelper.getMapValue(map, carProductionResolver.PRODUCTION_YEAR_MAP_FIELD);

  if (mapHelper.onlyNullValues(year)) {
    logger.warn('CarProductionBuilder.build: Unable to build car production fields (null values)');
    return null;
  }

  return new Production(year);
};

module.exports = exports;