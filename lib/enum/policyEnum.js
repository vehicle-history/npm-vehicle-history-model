const logger = require('../logger/logger').logger;
const AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.PolicyEnum = {
  Status: {
    UPTODATE: 'UPTODATE',
    OUTDATED: 'OUTDATED',
    UNKNOWN: 'UNKNOWN',
    getStatus: function (status, policyStatus) {
      let value = null;

      if (status) {
        status = status.toLowerCase();
        value = AbstractEnum.getValue(status, policyStatus);
      }
      else {
        status = null;
      }

      if (value === null) {
        value = 'UNKNOWN';
        logger.warn('PolicyEnum.getStatus: Unable to get status from "%s" - set "%s" as default', status, value);
      }

      return module.exports.PolicyEnum.Status[value];

    }
  }
};
