const logger = require('../logger/logger').logger;
const AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.OwnerEnum = {
  PRIVATE: 'PRIVATE',
  COMPANY: 'COMPANY',
  UNKNOWN: 'UNKNOWN',
  getType: function (type, ownerTypes) {
    let value = null;

    if (type) {
      type = type.toLowerCase();
      value = AbstractEnum.getValue(type, ownerTypes);
    }
    else {
      type = null;
    }

    if (value === null) {
      value = 'UNKNOWN';
      logger.warn('OwnerEnum.getType: Unable to get type from "%s" - set "%s" as default', type, value);
    }

    return module.exports.OwnerEnum[value];
  }
};
