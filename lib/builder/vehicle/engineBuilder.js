const assert = require('assert-plus');
const logger = require('../../logger/logger').logger;
const Engine = require('../../model/response/vehicle/engine').Engine;
const mapHelper = require('./../../mapHelper');
const carEngineResolver = require('./../../resolver/vehicle/carEngineResolver');

const build = function build(map) {
  assert.object(map, 'map');

  const cubicCapacity = mapHelper.getMapValue(map, carEngineResolver.ENGINE_CUBIC_CAPACITY_MAP_FIELD);
  const fuel = mapHelper.getMapValue(map, carEngineResolver.ENGINE_FUEL_TYPE_MAP_FIELD);

  if (mapHelper.onlyNullValues(cubicCapacity, fuel)) {
    logger.warn('CarEngineBuilder.build: Unable to resolve car engine fields (null values)');
    return null;
  }

  if (!cubicCapacity) {
    return null;
  }

  return new Engine(cubicCapacity, fuel);
};

module.exports = {
  build: build
};
