var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var Engine = require('../../model/response/vehicle/engine').Engine;
var mapHelper = require('./../../mapHelper');
var carEngineResolver = require('./../../resolver/vehicle/carEngineResolver');

var exports = {};

exports.build = function (map) {
  assert.object(map, 'map');

  var cubicCapacity = mapHelper.getMapValue(map, carEngineResolver.ENGINE_CUBIC_CAPACITY_MAP_FIELD);
  var fuel = mapHelper.getMapValue(map, carEngineResolver.ENGINE_FUEL_TYPE_MAP_FIELD);

  if (mapHelper.onlyNullValues(cubicCapacity, fuel)) {
    logger.warn('CarEngineBuilder.build: Unable to resolve car engine fields (null values)');
    return null;
  }

  if (!cubicCapacity) {
    return null;
  }

  return new Engine(cubicCapacity, fuel);
};


module.exports = exports;