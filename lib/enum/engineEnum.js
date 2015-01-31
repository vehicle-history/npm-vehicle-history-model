var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.EngineEnum = {
  FuelType: {
    PETROL: 'PETROL',
    GAS: 'GAS',
    'PETROL/GAS': 'PETROL/GAS',
    DIESEL: 'DIESEL',
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

      if (value === null) {
        value = 'OTHER';
        logger.warn('EngineEnum.FuelType: Unable to get type from "%s" - set "%s" as default', type, value);
      }

      return module.exports.EngineEnum.FuelType[value];
    }
  }
};
