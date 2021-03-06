const logger = require('../logger/logger').logger;
const AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.CountryEnum = {
  PL: 'PL',
  UK: 'UK',
  UNKNOWN: 'UNKNOWN',
  getCountry: function (country, countries) {
    let value = null;

    if (country) {
      country = country.toLowerCase();
      value = AbstractEnum.getValue(country, countries);
    }
    else {
      country = null;
    }

    if (value === null) {
      value = 'UNKNOWN';
      logger.warn('CountryEnum.getCountry: Unable to get country from "%s" - set "%s" as default', country, value);
    }

    return module.exports.CountryEnum[value];
  }
};
