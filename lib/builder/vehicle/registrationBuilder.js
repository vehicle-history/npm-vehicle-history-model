const assert = require('assert-plus');
const logger = require('../../logger/logger').logger;
const Registration = require('../../model/response/vehicle/registration').Registration;
const mapHelper = require('./../../mapHelper');
const carRegistrationResolver = require('./../../resolver/vehicle/carRegistrationResolver');

const build = function build(map) {
  assert.object(map, 'map');

  const status = mapHelper.getMapValue(map, carRegistrationResolver.REGISTRATION_STATUS_MAP_FIELD);
  const firstAt = mapHelper.getMapValue(map, carRegistrationResolver.REGISTRATION_FIRST_DATE_MAP_FIELD);

  if (mapHelper.onlyNullValues(status, firstAt)) {
    logger.warn('CarRegistrationBuilder.build: Unable to build car registration fields (null values)');
    return null;
  }

  if (status === 'UNKNOWN' && !firstAt) {
    return null;
  }

  return new Registration(status, firstAt);
};

module.exports = {
  build: build
};
