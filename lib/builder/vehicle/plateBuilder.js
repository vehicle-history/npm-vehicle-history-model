const assert = require('assert-plus');
const logger = require('../../logger/logger').logger;
const Plate = require('../../model/response/vehicle/plate').Plate;
const mapHelper = require('./../../mapHelper');
const carPlateResolver = require('./../../resolver/vehicle/carPlateResolver');

const build = function build(map) {
  assert.object(map, 'map');

  const value = mapHelper.getMapValue(map, carPlateResolver.PLATE_VALUE_MAP_FIELD);
  const country = mapHelper.getMapValue(map, carPlateResolver.PLATE_COUNTRY_MAP_FIELD);

  if (mapHelper.onlyNullValues(value, country)) {
    logger.warn('CarPlateBuilder.build: Unable to build car plate fields (null values)');
    return null;
  }

  if (!value) {
    return null;
  }

  return new Plate(value, country);
};

module.exports = {
  build: build
};
