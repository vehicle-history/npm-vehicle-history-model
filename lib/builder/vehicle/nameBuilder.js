const assert = require('assert-plus');
const logger = require('../../logger/logger').logger;
const Name = require('../../model/response/vehicle/name').Name;
const mapHelper = require('./../../mapHelper');
const carNameResolver = require('./../../resolver/vehicle/carNameResolver');

const build = function build(map) {
  assert.object(map, 'map');

  let make = mapHelper.getMapValue(map, carNameResolver.MANUFACTURER_MAP_FIELD);
  const name = mapHelper.getMapValue(map, carNameResolver.NAME_MAP_FIELD);
  const model = mapHelper.getMapValue(map, carNameResolver.MODEL_MAP_FIELD);

  if (!make || make === 'UNKNOWN') {
    make = null;
  }

  if (mapHelper.onlyNullValues(make, name, model)) {
    logger.warn('CarNameBuilder.build: Unable to build car name fields (null values)');
    return null;
  }

  return new Name(make, name, model);
};

module.exports = {
  build: build
};
