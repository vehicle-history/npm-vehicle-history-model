var assert = require('assert-plus');
var logger = require('../logger/logger').logger;
var Plate = require('../model/response/plate').Plate;
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;
var CountryEnum = require('../enum/countryEnum').CountryEnum;

var PLATE_VALUE_MAP_FIELD = 'plate.value';
var PLATE_COUNTRY_MAP_FIELD = 'plate.country';

var exports = {};

exports.CarPlateResolver = function CarPlateResolver() {
  AbstractResolver.call(this);

  this.resolve = function (map, options, reqPlate) {
    assert.object(map, 'map');
    assert.object(options, 'options');

    var value = this.getMapValue(map, PLATE_VALUE_MAP_FIELD);
    var countryStr = this.getMapValue(map, PLATE_COUNTRY_MAP_FIELD);

    if (this.onlyNullValues(value, countryStr)) {
      logger.warn('CarPlateResolver.resolve: Unable to resolve car plate fields (null values)');
      return null;
    }

    if (!value && reqPlate) {
      value = reqPlate;
    }

    if (!value) {
      return null;
    }

    var countries = options.get('resolver.variant.countries');
    var country = CountryEnum.getCountry(countryStr, countries);

    return new Plate(value, country);
  };
};
exports.CarPlateResolver.PLATE_VALUE_MAP_FIELD = PLATE_VALUE_MAP_FIELD;
exports.CarPlateResolver.PLATE_COUNTRY_MAP_FIELD = PLATE_COUNTRY_MAP_FIELD;

module.exports = exports;