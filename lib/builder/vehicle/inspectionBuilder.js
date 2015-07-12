var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var Inspection = require('../../model/response/vehicle/inspection').Inspection;
var mapHelper = require('./../../mapHelper');
var carInspectionResolver = require('./../../resolver/vehicle/carInspectionResolver');

var exports = {};

exports.build = function (map) {
  assert.object(map, 'map');

  var status = mapHelper.getMapValue(map, carInspectionResolver.INSPECTION_STATUS_MAP_FIELD);

  if (mapHelper.onlyNullValues(status)) {
    logger.warn('CarInspectionBuilder.build: Unable to resolve car inspection fields (null values)');
    return null;
  }

  return new Inspection(status);
};

module.exports = exports;