var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.InspectionEnum = {
  Status: {
    UPTODATE: 'UPTODATE',
    OUTDATED: 'OUTDATED',
    UNKNOWN: 'UNKNOWN',
    getStatus: function (type, inspectionStatus) {
      var value = null;

      if (type) {
        type = type.toLowerCase();

        value = AbstractEnum.getValue(type, inspectionStatus);
      }

      if (value === null) {
        value = 'UNKNOWN';
        logger.warn('InspectionEnum.getStatus: Unable to get type from "%s" - set "%s" as default', type, value);
      }

      return module.exports.InspectionEnum.Status[value];

    }
  }
};
