var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var mapHelper = require('./../../mapHelper');
var carVinResolver = require('./../../resolver/vehicle/carVinResolver');

var build = function build(map) {
  assert.object(map, 'map');

  var vin = mapHelper.getMapValue(map, carVinResolver.VIN_VALUE_MAP_FIELD);

  if (mapHelper.onlyNullValues(vin)) {
    logger.warn('CarVinBuilder.build: Unable to build car vin fields (null values)');
    return null;
  }

  return vin;
};

module.exports = {
  build: build
};
