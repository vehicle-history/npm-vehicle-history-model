var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.RegistrationEnum = {
  Status: {
    REGISTERED: 'REGISTERED',
    UNREGISTERED: 'UNREGISTERED',
    UNKNOWN: 'UNKNOWN',
    getStatus: function (type, registrationStatus) {
      var value = null;

      if (type) {
        type = type.toLowerCase();

        value = AbstractEnum.getValue(type, registrationStatus);
      }

      if (value === null) {
        value = 'UNKNOWN';
        logger.warn('RegistrationEnum.getStatus: Unable to get type from "%s" - set "%s" as default', type, value);
      }

      return module.exports.RegistrationEnum.Status[value];

    }
  }
};
