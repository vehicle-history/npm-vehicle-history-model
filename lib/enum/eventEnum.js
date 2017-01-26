const logger = require('../logger/logger').logger;
const AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.EventEnum = {
  PRODUCTION: 'PRODUCTION',
  REGISTRATION: 'REGISTRATION',
  ABROAD_REGISTRATION: 'ABROAD_REGISTRATION',
  DEREGISTRATION: 'DEREGISTRATION',
  CHANGE_OWNER: 'CHANGE_OWNER',
  INSPECTION: 'INSPECTION',
  CO_OWNER: 'CO_OWNER',
  HOLDER: 'HOLDER',
  CHANGED_REGISTRATION_LOCATION: 'CHANGED_REGISTRATION_LOCATION',
  STOLEN: 'STOLEN',
  UNKNOWN: 'UNKNOWN',
  getEvent: function (event, events) {
    let value = null;

    if (event) {
      event = event.toLowerCase();
      value = AbstractEnum.getValue(event, events);
    }
    else {
      event = null;
    }

    if (value === null) {
      value = 'UNKNOWN';
      logger.warn('EventEnum.getEvent: Unable to get event type from "%s" - set "%s" as default', event, value);
    }

    return module.exports.EventEnum[value];
  }
};
