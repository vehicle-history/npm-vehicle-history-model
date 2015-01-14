var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.PolicyEnum = {
  Status: {
    UPTODATE: 'UPTODATE',
    OUTDATED: 'OUTDATED',
    UNKNOWN: 'UNKNOWN',
    getStatus: function (type, policyStatus) {
      var value = null;

      if (type) {
        type = type.toLowerCase();

        value = AbstractEnum.getValue(type, policyStatus);
      }

      if (value === null) {
        value = 'UNKNOWN';
        logger.warn('PolicyEnum.getStatus: Unable to get type from "%s" - set "%s" as default', type, value);
      }

      return module.exports.PolicyEnum.Status[value];

    }
  }
};
