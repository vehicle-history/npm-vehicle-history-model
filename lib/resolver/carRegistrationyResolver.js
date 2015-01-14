var logger = require('../logger/logger').logger;
var Registration = require('../model/response/registration').Registration;
var RegistrationEnum = require('../enum/registrationEnum').RegistrationEnum;
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var REGISTRATION_STATUS_MAP_FIELD = 'registration.status';

var exports = {};

exports.CarRegistrationyResolver = function CarRegistrationyResolver() {
  AbstractResolver.call(this);

  this.resolve = function (map, options) {
    var status = this.getMapValue(map, REGISTRATION_STATUS_MAP_FIELD);

    if (this.onlyNullValues(status)) {
      logger.warn('CarRegistrationyResolver.resolve: Unable to resolve car policy fields (null values)');
      return null;
    }

    var registrationStatus = options.get('resolver.variant.registrationStatus');
    var registrationStatus = RegistrationEnum.Status.getStatus(status, registrationStatus);

    return new Registration(registrationStatus);
  };
};


module.exports = exports;