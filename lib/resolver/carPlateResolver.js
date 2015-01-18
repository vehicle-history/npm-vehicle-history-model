var logger = require('../logger/logger').logger;
var Plate = require('../model/response/plate').Plate;
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var PLATE_VALUE_MAP_FIELD = 'plate.value';
var PLATE_COUNTRY_MAP_FIELD = 'plate.country';

var exports = {};

exports.CarPlateResolver = function CarPlateResolver() {
  AbstractResolver.call(this);

  this.resolve = function (map, options, reqPlate) {
    var value = this.getMapValue(map, PLATE_VALUE_MAP_FIELD);
    var country = this.getMapValue(map, PLATE_COUNTRY_MAP_FIELD);

    if (this.onlyNullValues(value, country)) {
      logger.warn('CarPlateResolver.resolve: Unable to resolve car plate fields (null values)');
      return null;
    }

    if (!value && reqPlate) {
      value = reqPlate;
    }

    if (!value) {
      return null;
    }

    return new Plate(value, country);
  };
};
exports.CarPlateResolver.PLATE_VALUE_MAP_FIELD = PLATE_VALUE_MAP_FIELD;
exports.CarPlateResolver.PLATE_COUNTRY_MAP_FIELD = PLATE_COUNTRY_MAP_FIELD;

module.exports = exports;