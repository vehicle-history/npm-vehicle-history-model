var logger = require('../logger/logger').logger;
var exports = {};

exports.AbstractResolver = function AbstractResolver() {

  this.getMapValue = function (map, field) {
    if (map.hasOwnProperty(field)) {
      var value = map[field];

      if (value === null) {
        logger.info('AbstractResolver.getMapValue: Null value for "%s" field', field);
      }

      return value;
    }

    logger.info('AbstractResolver.getMapValue: Unable to get value from map for "%s" field', field);
    return null;
  };

  this.onlyNullValues = function () {
    if (arguments) {

      for (var i in arguments) {
        if (arguments.hasOwnProperty(i)) {
          var arg = arguments[i];

          if (arg !== null) {
            return false;
          }
        }
      }
    }

    return true;
  };

  this.getNaturalValueOrNull = function (value) {
    if (!value || value < 1) {
      return null;
    }
    return ~~value;
  };
};

module.exports = exports;