const assert = require('assert-plus');
const InspectionEnum = require('../../enum/inspectionEnum').InspectionEnum;
const mapHelper = require('./../../mapHelper');

const INSPECTION_STATUS_MAP_FIELD = 'inspection.status';

const resolve = function resolve(map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  const status = mapHelper.getMapValue(map, INSPECTION_STATUS_MAP_FIELD);

  const statuses = options.get('resolver.variant.inspectionStatus');
  const inspectionStatus = InspectionEnum.Status.getStatus(status, statuses);

  mapHelper.updateMapValue(map, INSPECTION_STATUS_MAP_FIELD, inspectionStatus);
};

module.exports = {
  resolve: resolve,
  INSPECTION_STATUS_MAP_FIELD: INSPECTION_STATUS_MAP_FIELD
};