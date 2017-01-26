const assert = require('assert-plus');
const logger = require('../../logger/logger').logger;
const Mileage = require('../../model/response/vehicle/mileage').Mileage;
const mapHelper = require('./../../mapHelper');
const carMileageResolver = require('./../../resolver/vehicle/carMileageResolver');

const build = function build(map) {
  assert.object(map, 'map');

  const value = mapHelper.getMapValue(map, carMileageResolver.MILEAGE_VALUE_MAP_FIELD);
  const type = mapHelper.getMapValue(map, carMileageResolver.MILEAGE_TYPE_MAP_FIELD);

  if (mapHelper.onlyNullValues(value, type)) {
    logger.warn('CarMileageBuilder.build: Unable to resolve car mileage fields (null values)');
    return null;
  }

  //if missing value, then null for whole object
  if (!value) {
    return null;
  }

  return new Mileage(value, type);
};

module.exports = {
  build: build
};
