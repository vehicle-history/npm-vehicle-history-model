var assert = require('assert-plus');
var mapHelper = require('./../../mapHelper');
var CountryEnum = require('../../enum/countryEnum').CountryEnum;

var PLATE_VALUE_MAP_FIELD = 'plate.value';
var PLATE_COUNTRY_MAP_FIELD = 'plate.country';

var exports = {};

exports.resolve = function (map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  var value = mapHelper.getMapValue(map, PLATE_VALUE_MAP_FIELD);
  var countryStr = mapHelper.getMapValue(map, PLATE_COUNTRY_MAP_FIELD);

  var countries = options.get('resolver.variant.countries');
  var country = CountryEnum.getCountry(countryStr, countries);

  mapHelper.updateMapValue(map, PLATE_VALUE_MAP_FIELD, value);
  mapHelper.updateMapValue(map, PLATE_COUNTRY_MAP_FIELD, country);
};

exports.PLATE_VALUE_MAP_FIELD = PLATE_VALUE_MAP_FIELD;
exports.PLATE_COUNTRY_MAP_FIELD = PLATE_COUNTRY_MAP_FIELD;

module.exports = exports;