var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.InspectionEnum = {
  Status: {
    UPTODATE: 'UPTODATE',
    OUTDATED: 'OUTDATED',
    UNKNOWN: 'UNKNOWN',
    getStatus: function (status, inspectionStatus) {
      var value = null;

      if (status) {
        status = status.toLowerCase();

        value = AbstractEnum.getValue(status, inspectionStatus);
      }
      else {
        status = null;
      }

      if (value === null) {
        value = 'UNKNOWN';
        logger.warn('InspectionEnum.getStatus: Unable to get status from "%s" - set "%s" as default', status, value);
      }

      return module.exports.InspectionEnum.Status[value];

    }
  }
};
