var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.CountryEnum = {
  PL: 'PL',
  UK: 'UK',
  UNKNOWN: 'UNKNOWN',
  getCountry: function (type, countries) {
    var value = null;

    if (type) {
      type = type.toLowerCase();
      value = AbstractEnum.getValue(type, countries);
    }

    if (value === null) {
      value = 'UNKNOWN';
      logger.warn('CountryEnum.getCountry: Unable to get type from "%s" - set "%s" as default', type, value);
    }

    return module.exports.CountryEnum[value];
  }
};
