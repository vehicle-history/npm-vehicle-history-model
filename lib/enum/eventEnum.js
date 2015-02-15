var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.EventEnum = {
  PRODUCTION: 'PRODUCTION',
  REGISTRATION: 'REGISTRATION',
  DEREGISTRATION: 'DEREGISTRATION',
  CHANGE_OWNER: 'CHANGE_OWNER',
  INSPECTON: 'INSPECTON',
  UNKNOWN: 'UNKNOWN',
  getEvent: function (type, events) {
    var value = null;

    if (type) {
      type = type.toLowerCase();
      value = AbstractEnum.getValue(type, events);
    }

    if (value === null) {
      value = 'UNKNOWN';
      logger.warn('EventEnum.getEvent: Unable to get type from "%s" - set "%s" as default', type, value);
    }

    return module.exports.EventEnum[value];
  }
};
