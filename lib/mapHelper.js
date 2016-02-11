var assert = require('assert-plus');
var logger = require('./logger/logger').logger;

var getMapValue = function getMapValue(map, field) {
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

var updateMapValue = function updateMapValue(map, field, value) {
  assert.object(map, 'map');
  assert.string(field, 'field');

  map[field] = value;
};

var onlyNullValues = function onlyNullValues() {
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

var getNaturalValueOrNull = function getNaturalValueOrNull(value) {
  if (!value || value < 1) {
    return null;
  }
  return ~~value;
};

module.exports = {
  getMapValue: getMapValue,
  updateMapValue: updateMapValue,
  onlyNullValues: onlyNullValues,
  getNaturalValueOrNull: getNaturalValueOrNull
};