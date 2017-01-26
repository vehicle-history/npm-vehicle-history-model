const assert = require('assert-plus');
const mapHelper = require('./../../mapHelper');
const CountryEnum = require('../../enum/countryEnum').CountryEnum;

const PLATE_VALUE_MAP_FIELD = 'plate.value';
const PLATE_COUNTRY_MAP_FIELD = 'plate.country';

const resolve = function resolve(map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  const value = mapHelper.getMapValue(map, PLATE_VALUE_MAP_FIELD);
  const countryStr = mapHelper.getMapValue(map, PLATE_COUNTRY_MAP_FIELD);

  const countries = options.get('resolver.variant.countries');
  const country = CountryEnum.getCountry(countryStr, countries);

  mapHelper.updateMapValue(map, PLATE_VALUE_MAP_FIELD, value);
  mapHelper.updateMapValue(map, PLATE_COUNTRY_MAP_FIELD, country);
};

module.exports = {
  resolve: resolve,
  PLATE_VALUE_MAP_FIELD: PLATE_VALUE_MAP_FIELD,
  PLATE_COUNTRY_MAP_FIELD: PLATE_COUNTRY_MAP_FIELD
};
