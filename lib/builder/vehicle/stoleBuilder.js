const assert = require('assert-plus');
const logger = require('../../logger/logger').logger;
const mapHelper = require('./../../mapHelper');
const carStoleResolver = require('./../../resolver/vehicle/carStoleResolver');

const build = function build(map) {
  assert.object(map, 'map');

  const status = mapHelper.getMapValue(map, carStoleResolver.STATUS_STOLEN_MAP_FIELD);

  if (mapHelper.onlyNullValues(status)) {
    logger.warn('CarStoleBuilder.build: Unable to build car stole fields (null values)');
    return null;
  }

  return status;
};

module.exports = {
  build: build
};
