var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var Mileage = require('../../model/response/vehicle/mileage').Mileage;
var mapHelper = require('./../../mapHelper');
var carMileageResolver = require('./../../resolver/vehicle/carMileageResolver');

var exports = {};

exports.build = function (map) {
  assert.object(map, 'map');

  var value = mapHelper.getMapValue(map, carMileageResolver.MILEAGE_VALUE_MAP_FIELD);
  var type = mapHelper.getMapValue(map, carMileageResolver.MILEAGE_TYPE_MAP_FIELD);

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

module.exports = exports;