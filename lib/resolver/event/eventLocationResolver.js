const assert = require('assert-plus');
const LocationBuilder = require('../../model/response/vehicle/location').LocationBuilder;
const CountryEnum = require('../../enum/countryEnum').CountryEnum;

const resolve = function resolve(event, options) {
  assert.object(event, 'event');
  assert.string(event.country, 'event.country');
  assert.object(options, 'options');

  if (!event.location) {
    return null;
  }

  const countries = options.get('resolver.variant.countries');
  const country = CountryEnum.getCountry(event.country, countries);
  return new LocationBuilder().withCountry(country).withState(event.location).build();
};

module.exports = {
  resolve: resolve
};
