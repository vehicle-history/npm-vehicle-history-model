const assert = require('assert-plus');
const logger = require('../../logger/logger').logger;
const Inspection = require('../../model/response/vehicle/inspection').Inspection;
const mapHelper = require('./../../mapHelper');
const carInspectionResolver = require('./../../resolver/vehicle/carInspectionResolver');

const build = function build(map) {
  assert.object(map, 'map');

  const status = mapHelper.getMapValue(map, carInspectionResolver.INSPECTION_STATUS_MAP_FIELD);

  if (mapHelper.onlyNullValues(status)) {
    logger.warn('CarInspectionBuilder.build: Unable to resolve car inspection fields (null values)');
    return null;
  }

  return new Inspection(status);
};

module.exports = {
  build: build
};
