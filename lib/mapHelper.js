var assert = require('assert-plus');
var logger = require('./logger/logger').logger;
var exports = {};

exports.getMapValue = function (map, field) {
  assert.object(map, 'map');
  assert.string(field, 'field');

  if (map.hasOwnProperty(field)) {
    var value = map[field];

    if (value === null) {
      logger.info('MapHelper.getMapValue: Null value for "%s" field', field);
    }

    return value;
  }

  logger.info('MapHelper.getMapValue: Unable to get value from map for "%s" field', field);
  return null;
};

exports.updateMapValue = function (map, field, value) {
  assert.object(map, 'map');
  assert.string(field, 'field');

  map[field] = value;
};

exports.onlyNullValues = function () {
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

exports.getNaturalValueOrNull = function (value) {
  if (!value || value < 1) {
    return null;
  }
  return ~~value;
};

module.exports = exports;