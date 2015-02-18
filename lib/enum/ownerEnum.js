var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.OwnerEnum = {
  PRIVATE: 'PRIVATE',
  UNKNOWN: 'UNKNOWN',
  getType: function (type, ownerTypes) {
    var value = null;

    if (type) {
      type = type.toLowerCase();
      value = AbstractEnum.getValue(type, ownerTypes);
    }

    if (value === null) {
      value = 'UNKNOWN';
      logger.warn('OwnerEnum.getType: Unable to get type from "%s" - set "%s" as default', type, value);
    }

    return module.exports.OwnerEnum[value];
  }
};
