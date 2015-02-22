var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var Name = require('../../model/response/vehicle/name').Name;
var mapHelper = require('./../../mapHelper');
var carNameResolver = require('./../../resolver/vehicle/carNameResolver');

var exports = {};

exports.build = function (map) {
  assert.object(map, 'map');

  var make = mapHelper.getMapValue(map, carNameResolver.MANUFACTURER_MAP_FIELD);
  var name = mapHelper.getMapValue(map, carNameResolver.NAME_MAP_FIELD);
  var model = mapHelper.getMapValue(map, carNameResolver.MODEL_MAP_FIELD);

  if ((!make || make === 'UNKNOWN')) {
    make = null;
  }

  if (mapHelper.onlyNullValues(make, name, model)) {
    logger.warn('CarNameBuilder.build: Unable to build car name fields (null values)');
    return null;
  }

  return new Name(make, name, model);
};

module.exports = exports;