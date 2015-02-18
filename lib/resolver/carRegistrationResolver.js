var assert = require('assert-plus');
var date = require('../date');
var logger = require('../logger/logger').logger;
var Registration = require('../model/response/registration').Registration;
var RegistrationEnum = require('../enum/registrationEnum').RegistrationEnum;
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var REGISTRATION_STATUS_MAP_FIELD = 'registration.status';
var REGISTRATION_FIRST_DATE_MAP_FIELD = 'registration.firstDate';

var exports = {};

exports.CarRegistrationResolver = function CarRegistrationResolver() {
  AbstractResolver.call(this);

  this.resolve = function (map, options) {
    assert.object(map, 'map');
    assert.object(options, 'options');

    var status = this.getMapValue(map, REGISTRATION_STATUS_MAP_FIELD);
    var firstAt = this.getMapValue(map, REGISTRATION_FIRST_DATE_MAP_FIELD);

    if (!firstAt) {
      firstAt = null;
    }

    if (this.onlyNullValues(status, firstAt)) {
      logger.warn('CarRegistrationResolver.resolve: Unable to resolve car registration fields (null values)');
      return null;
    }

    var registrationStatus = options.get('resolver.variant.registrationStatus');
    var registrationStatus = RegistrationEnum.Status.getStatus(status, registrationStatus);

    return new Registration(registrationStatus, date.parseIsoString(firstAt));
  };
};
exports.CarRegistrationResolver.REGISTRATION_STATUS_MAP_FIELD = REGISTRATION_STATUS_MAP_FIELD;
exports.CarRegistrationResolver.REGISTRATION_FIRST_DATE_MAP_FIELD = REGISTRATION_FIRST_DATE_MAP_FIELD;


module.exports = exports;