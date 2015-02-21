var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var InspectionEnum = require('../../enum/inspectionEnum').InspectionEnum;
var mapHelper = require('./../../mapHelper');

var INSPECTION_STATUS_MAP_FIELD = 'inspection.status';

var exports = {};

exports.resolve = function (map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  var status = mapHelper.getMapValue(map, INSPECTION_STATUS_MAP_FIELD);

  var statuses = options.get('resolver.variant.inspectionStatus');
  var inspectionStatus = InspectionEnum.Status.getStatus(status, statuses);

  mapHelper.updateMapValue(map, INSPECTION_STATUS_MAP_FIELD, inspectionStatus);
};

exports.INSPECTION_STATUS_MAP_FIELD = INSPECTION_STATUS_MAP_FIELD;


module.exports = exports;