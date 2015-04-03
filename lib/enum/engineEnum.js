var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.EngineEnum = {
  FuelType: {
    PETROL: 'PETROL',
    PETROL_GAS: 'PETROL_GAS',
    DIESEL: 'DIESEL',
    MIXED_FUEL_OIL: 'MIXED_FUEL_OIL',
    ETANOL: 'ETANOL',
    HYBRID: 'HYBRID',
    ELECTRIC: 'ELECTRIC',
    HYDROGEN: 'HYDROGEN',
    OTHER: 'OTHER',
    getFuelType: function (type, engineFuels) {
      var value = null;

      if (type) {
        type = type.toLowerCase();
        value = AbstractEnum.getValue(type, engineFuels);
      }
      else {
        type = null;
      }

      if (value === null) {
        value = 'OTHER';
        logger.warn('EngineEnum.FuelType: Unable to get type from "%s" - set "%s" as default', type, value);
      }

      return module.exports.EngineEnum.FuelType[value];
    }
  }
};
