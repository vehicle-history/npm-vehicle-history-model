var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var Policy = require('../../model/response/vehicle/policy').Policy;
var mapHelper = require('./../../mapHelper');
var carPolicyResolver = require('./../../resolver/vehicle/carPolicyResolver');

var exports = {};

exports.build = function (map) {
  assert.object(map, 'map');

  var status = mapHelper.getMapValue(map, carPolicyResolver.POLICY_STATUS_MAP_FIELD);

  if (mapHelper.onlyNullValues(status)) {
    logger.warn('CarPolicyBuilder.build: Unable to build car policy fields (null values)');
    return null;
  }

  return new Policy(status);
};

module.exports = exports;