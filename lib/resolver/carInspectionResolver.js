var logger = require('../logger/logger').logger;
var Inspection = require('../model/response/inspection').Inspection;
var InspectionEnum = require('../enum/inspectionEnum').InspectionEnum;
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var INSPECTION_STATUS_MAP_FIELD = 'inspection.status';

var exports = {};

exports.CarInspectionResolver = function CarInspectionResolver() {
  AbstractResolver.call(this);

  this.resolve = function (map, options) {
    var status = this.getMapValue(map, INSPECTION_STATUS_MAP_FIELD);

    if (this.onlyNullValues(status)) {
      logger.warn('CarInspectionResolver.resolve: Unable to resolve car inspection fields (null values)');
      return null;
    }

    var inspectionStatus = options.get('resolver.variant.inspectionStatus');
    var inspectionStatus = InspectionEnum.Status.getStatus(status, inspectionStatus);

    return new Inspection(inspectionStatus);
  };
};
exports.CarInspectionResolver.INSPECTION_STATUS_MAP_FIELD = INSPECTION_STATUS_MAP_FIELD;


module.exports = exports;