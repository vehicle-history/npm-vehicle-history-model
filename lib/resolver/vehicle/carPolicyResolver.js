var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var PolicyEnum = require('../../enum/policyEnum').PolicyEnum;
var mapHelper = require('./../../mapHelper');

var POLICY_STATUS_MAP_FIELD = 'policy.status';

var exports = {};

exports.resolve = function (map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  var policy = mapHelper.getMapValue(map, POLICY_STATUS_MAP_FIELD);

  var policyStatus = options.get('resolver.variant.policyStatus');
  var policyStatus = PolicyEnum.Status.getStatus(policy, policyStatus);

  mapHelper.updateMapValue(map, POLICY_STATUS_MAP_FIELD, policyStatus);
};

exports.POLICY_STATUS_MAP_FIELD = POLICY_STATUS_MAP_FIELD;

module.exports = exports;