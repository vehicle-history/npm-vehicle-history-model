const assert = require('assert-plus');
const PolicyEnum = require('../../enum/policyEnum').PolicyEnum;
const mapHelper = require('./../../mapHelper');

const POLICY_STATUS_MAP_FIELD = 'policy.status';

const resolve = function resolve(map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  const policy = mapHelper.getMapValue(map, POLICY_STATUS_MAP_FIELD);

  const policyStatuses = options.get('resolver.variant.policyStatus');
  const policyStatus = PolicyEnum.Status.getStatus(policy, policyStatuses);

  mapHelper.updateMapValue(map, POLICY_STATUS_MAP_FIELD, policyStatus);
};

module.exports = {
  resolve: resolve,
  POLICY_STATUS_MAP_FIELD: POLICY_STATUS_MAP_FIELD
};
