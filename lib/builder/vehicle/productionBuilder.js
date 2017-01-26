const assert = require('assert-plus');
const logger = require('../../logger/logger').logger;
const Production = require('../../model/response/vehicle/production').Production;
const mapHelper = require('./../../mapHelper');
const carProductionResolver = require('./../../resolver/vehicle/carProductionResolver');

const build = function build(map) {
  assert.object(map, 'map');

  const year = mapHelper.getMapValue(map, carProductionResolver.PRODUCTION_YEAR_MAP_FIELD);

  if (mapHelper.onlyNullValues(year)) {
    logger.warn('CarProductionBuilder.build: Unable to build car production fields (null values)');
    return null;
  }

  return new Production(year);
};

module.exports = {
  build: build
};
