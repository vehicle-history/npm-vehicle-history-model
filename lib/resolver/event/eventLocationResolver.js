var assert = require('assert-plus');
var Location = require('../../model/response/vehicle/location').Location;
var CountryEnum = require('../../enum/countryEnum').CountryEnum;

var exports = {};

exports.resolve = function (event, options) {
  assert.object(event, 'event');
  assert.string(event.country, 'event.country');
  assert.object(options, 'options');

  if (!event.location) {
    return null;
  }

  var countries = options.get('resolver.variant.countries');
  var country = CountryEnum.getCountry(event.country, countries);
  return new Location(event.location, country);
};


module.exports = exports;