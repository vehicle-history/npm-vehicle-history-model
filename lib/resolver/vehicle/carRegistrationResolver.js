const assert = require('assert-plus');
const date = require('../../date');
const RegistrationEnum = require('../../enum/registrationEnum').RegistrationEnum;
const mapHelper = require('./../../mapHelper');

const REGISTRATION_STATUS_MAP_FIELD = 'registration.status';
const REGISTRATION_FIRST_DATE_MAP_FIELD = 'registration.firstDate';

const resolve = function resolve(map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  const status = mapHelper.getMapValue(map, REGISTRATION_STATUS_MAP_FIELD);
  let firstAt = mapHelper.getMapValue(map, REGISTRATION_FIRST_DATE_MAP_FIELD);

  if (!firstAt) {
    firstAt = null;
  }

  const registrationStatuses = options.get('resolver.variant.registrationStatus');
  const registrationStatus = RegistrationEnum.Status.getStatus(status, registrationStatuses);

  mapHelper.updateMapValue(map, REGISTRATION_STATUS_MAP_FIELD, registrationStatus);
  mapHelper.updateMapValue(map, REGISTRATION_FIRST_DATE_MAP_FIELD, date.parseIsoString(firstAt));
};

module.exports = {
  resolve: resolve,
  REGISTRATION_STATUS_MAP_FIELD: REGISTRATION_STATUS_MAP_FIELD,
  REGISTRATION_FIRST_DATE_MAP_FIELD: REGISTRATION_FIRST_DATE_MAP_FIELD
};
