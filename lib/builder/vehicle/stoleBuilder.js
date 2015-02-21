var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var mapHelper = require('./../../mapHelper');
var carStoleResolver = require('./../../resolver/vehicle/carStoleResolver');

var exports = {};

exports.build = function (map) {
  assert.object(map, 'map');

  var status = mapHelper.getMapValue(map, carStoleResolver.STATUS_STOLEN_MAP_FIELD);

  if (mapHelper.onlyNullValues(status)) {
    logger.warn('CarStoleBuilder.build: Unable to build car stole fields (null values)');
    return null;
  }

  return status;
};

module.exports = exports;