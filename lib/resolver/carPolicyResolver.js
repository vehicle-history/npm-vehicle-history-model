var logger = require('../logger/logger').logger;
var Policy = require('../model/response/policy').Policy;
var PolicyEnum = require('../enum/policyEnum').PolicyEnum;
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var POLICY_STATUS_MAP_FIELD = 'policy.status';

var exports = {};

exports.CarPolicyResolver = function CarPolicyResolver() {
  AbstractResolver.call(this);

  this.resolve = function (map, options) {
    var policy = this.getMapValue(map, POLICY_STATUS_MAP_FIELD);

    if (this.onlyNullValues(policy)) {
      logger.warn('CarPolicyResolver.resolve: Unable to resolve car policy fields (null values)');
      return null;
    }

    var policyStatus = options.get('resolver.variant.policyStatus');
    var policyStatus = PolicyEnum.Status.getStatus(policy, policyStatus);

    return new Policy(policyStatus);
  };
};
exports.CarPolicyResolver.POLICY_STATUS_MAP_FIELD = POLICY_STATUS_MAP_FIELD;

module.exports = exports;