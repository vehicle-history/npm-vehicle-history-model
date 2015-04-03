var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.RegistrationEnum = {
  Status: {
    REGISTERED: 'REGISTERED',
    UNREGISTERED: 'UNREGISTERED',
    UNKNOWN: 'UNKNOWN',
    getStatus: function (status, registrationStatus) {
      var value = null;

      if (status) {
        status = status.toLowerCase();
        value = AbstractEnum.getValue(status, registrationStatus);
      }
      else {
        status = null;
      }

      if (value === null) {
        value = 'UNKNOWN';
        logger.warn('RegistrationEnum.getStatus: Unable to get status from "%s" - set "%s" as default', status, value);
      }

      return module.exports.RegistrationEnum.Status[value];

    }
  }
};
