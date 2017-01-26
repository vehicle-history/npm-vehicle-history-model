const assert = require('assert-plus');
const logger = require('../../logger/logger').logger;
const mapHelper = require('./../../mapHelper');
const carVinResolver = require('./../../resolver/vehicle/carVinResolver');

const build = function build(map) {
  assert.object(map, 'map');

  const vin = mapHelper.getMapValue(map, carVinResolver.VIN_VALUE_MAP_FIELD);

  if (mapHelper.onlyNullValues(vin)) {
    logger.warn('CarVinBuilder.build: Unable to build car vin fields (null values)');
    return null;
  }

  return vin;
};

module.exports = {
  build: build
};
