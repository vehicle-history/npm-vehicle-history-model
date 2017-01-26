const assert = require('assert-plus');
const logger = require('../../logger/logger').logger;
const Policy = require('../../model/response/vehicle/policy').Policy;
const mapHelper = require('./../../mapHelper');
const carPolicyResolver = require('./../../resolver/vehicle/carPolicyResolver');

const build = function build(map) {
  assert.object(map, 'map');

  const status = mapHelper.getMapValue(map, carPolicyResolver.POLICY_STATUS_MAP_FIELD);

  if (mapHelper.onlyNullValues(status)) {
    logger.warn('CarPolicyBuilder.build: Unable to build car policy fields (null values)');
    return null;
  }

  return new Policy(status);
};

module.exports = {
  build: build
};
