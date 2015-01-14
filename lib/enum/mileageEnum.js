var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.MileageEnum = {
  Type: {
    KM: 'KM',
    MILE: 'MILE',
    getMileageType: function (type, mileageStatus) {
      var value = null;

      if (type) {
        type = type.toLowerCase();

        value = AbstractEnum.getValue(type, mileageStatus);
      }

      if (value === null) {
        value = 'KM';
        logger.warn('MileageEnum.getMileageType: Unable to get type from "%s" - set "%s" as default', type, value);
      }

      return module.exports.MileageEnum.Type[value];
    }
  }
};