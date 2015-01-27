var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.MakeEnum = {
  AUDI: 'AUDI',
  BMW: 'BMW',
  CHEVROLET: 'CHEVROLET',
  CHRYSLER: 'CHRYSLER',
  CITROEN: 'CITROEN',
  DACIA: 'DACIA',
  DAEWOO: 'DAEWOO',
  FIAT: 'FIAT',
  FORD: 'FORD',
  HONDA: 'HONDA',
  HYUNDAI: 'HYUNDAI',
  JAGUAR: 'JAGUAR',
  KIA: 'KIA',
  LEXUS: 'LEXUS',
  MERCEDES: 'MERCEDES',
  MAZDA: 'MAZDA',
  MINI: 'MINI',
  MITSUBISHI: 'MITSUBISHI',
  NISSAN: 'NISSAN',
  OPEL: 'OPEL',
  PEUGEOT: 'PEUGEOT',
  RENAULT: 'RENAULT',
  SEAT: 'SEAT',
  SKODA: 'SKODA',
  SUZUKI: 'SUZUKI',
  TOYOTA: 'TOYOTA',
  VOLKSWAGEN: 'VOLKSWAGEN',
  VOLVO: 'VOLVO',
  UNKNOWN: 'UNKNOWN',

  getMake: function (type, makes) {
    var value = null;

    if (type) {
      type = type.toLowerCase();
      value = AbstractEnum.getValue(type, makes);
    }

    if (value === null) {
      value = 'UNKNOWN';
      logger.warn('MakeEnum.getMake: Unable to get type from "%s" - set "%s" as default', type, value);
    }

    return module.exports.MakeEnum[value];
  }
};
