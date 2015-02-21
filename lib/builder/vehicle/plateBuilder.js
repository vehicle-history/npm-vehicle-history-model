var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var Plate = require('../../model/response/vehicle/plate').Plate;
var mapHelper = require('./../../mapHelper');
var carPlateResolver = require('./../../resolver/vehicle/carPlateResolver');

var exports = {};

exports.build = function (map) {
  assert.object(map, 'map');

  var value = mapHelper.getMapValue(map, carPlateResolver.PLATE_VALUE_MAP_FIELD);
  var country = mapHelper.getMapValue(map, carPlateResolver.PLATE_COUNTRY_MAP_FIELD);

  if (mapHelper.onlyNullValues(value, country)) {
    logger.warn('CarPlateBuilder.build: Unable to build car plate fields (null values)');
    return null;
  }

  if (!value) {
    return null;
  }

  return new Plate(value, country);
};


module.exports = exports;