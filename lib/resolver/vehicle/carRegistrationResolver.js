var assert = require('assert-plus');
var date = require('../../date');
var RegistrationEnum = require('../../enum/registrationEnum').RegistrationEnum;
var mapHelper = require('./../../mapHelper');

var REGISTRATION_STATUS_MAP_FIELD = 'registration.status';
var REGISTRATION_FIRST_DATE_MAP_FIELD = 'registration.firstDate';

var exports = {};

exports.resolve = function (map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  var status = mapHelper.getMapValue(map, REGISTRATION_STATUS_MAP_FIELD);
  var firstAt = mapHelper.getMapValue(map, REGISTRATION_FIRST_DATE_MAP_FIELD);

  if (!firstAt) {
    firstAt = null;
  }

  var registrationStatuses = options.get('resolver.variant.registrationStatus');
  var registrationStatus = RegistrationEnum.Status.getStatus(status, registrationStatuses);

  mapHelper.updateMapValue(map, REGISTRATION_STATUS_MAP_FIELD, registrationStatus);
  mapHelper.updateMapValue(map, REGISTRATION_FIRST_DATE_MAP_FIELD, date.parseIsoString(firstAt));
};

exports.REGISTRATION_STATUS_MAP_FIELD = REGISTRATION_STATUS_MAP_FIELD;
exports.REGISTRATION_FIRST_DATE_MAP_FIELD = REGISTRATION_FIRST_DATE_MAP_FIELD;


module.exports = exports;