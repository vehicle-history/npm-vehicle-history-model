var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var Registration = require('../../model/response/vehicle/registration').Registration;
var mapHelper = require('./../../mapHelper');
var carRegistrationResolver = require('./../../resolver/vehicle/carRegistrationResolver');

var exports = {};

exports.build = function (map) {
  assert.object(map, 'map');

  var status = mapHelper.getMapValue(map, carRegistrationResolver.REGISTRATION_STATUS_MAP_FIELD);
  var firstAt = mapHelper.getMapValue(map, carRegistrationResolver.REGISTRATION_FIRST_DATE_MAP_FIELD);

  if (mapHelper.onlyNullValues(status, firstAt)) {
    logger.warn('CarRegistrationBuilder.build: Unable to build car registration fields (null values)');
    return null;
  }

  if (status === 'UNKNOWN' && !firstAt) {
    return null;
  }

  return new Registration(status, firstAt);
};

module.exports = exports;