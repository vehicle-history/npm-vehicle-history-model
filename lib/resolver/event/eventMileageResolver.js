var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var MileageEnum = require('../../enum/mileageEnum').MileageEnum;
var carMileageBuilder = require('../../builder/vehicle/mileageBuilder');
var carMileageResolver = require('../../resolver/vehicle/carMileageResolver');

var exports = {};

exports.resolve = function (event, options, map) {
  assert.object(event, 'event');
  assert.object(options, 'options');

  if (!event.mileage) {
    return null;
  }

  if (!map[carMileageResolver.MILEAGE_VALUE_MAP_FIELD]) {
    map[carMileageResolver.MILEAGE_VALUE_MAP_FIELD] = event.mileage;
    carMileageResolver.resolve(map, options);
  }

  return carMileageBuilder.build(map);
};


module.exports = exports;