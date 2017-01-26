const assert = require('assert-plus');
const logger = require('./logger/logger').logger;

const getMapValue = function getMapValue(map, field) {
  assert.object(map, 'map');
  assert.string(field, 'field');

  if (map.hasOwnProperty(field)) {
    const value = map[field];

    if (value === null) {
      logger.info('MapHelper.getMapValue: Null value for "%s" field', field);
    }

    return value;
  }

  logger.info('MapHelper.getMapValue: Unable to get value from map for "%s" field', field);
  return null;
};

const updateMapValue = function updateMapValue(map, field, value) {
  assert.object(map, 'map');
  assert.string(field, 'field');

  map[field] = value;
};

const onlyNullValues = function onlyNullValues() {
  if (arguments) {

    for (const i in arguments) {
      if (arguments.hasOwnProperty(i)) {
        const arg = arguments[i];

        if (arg !== null) {
          return false;
        }
      }
    }
  }

  return true;
};

const getNaturalValueOrNull = function getNaturalValueOrNull(value) {
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