var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.MakeEnum = {
  AUDI: 'AUDI',
  ALFA_ROMEO: 'ALFA_ROMEO',
  BMW: 'BMW',
  BENTLEY: 'BENTLEY',
  CHEVROLET: 'CHEVROLET',
  CHRYSLER: 'CHRYSLER',
  CITROEN: 'CITROEN',
  DACIA: 'DACIA',
  DAEWOO: 'DAEWOO',
  FIAT: 'FIAT',
  FSO: 'FSO',
  FORD: 'FORD',
  HONDA: 'HONDA',
  HYUNDAI: 'HYUNDAI',
  JAGUAR: 'JAGUAR',
  YAMAHA: 'YAMAHA',
  KIA: 'KIA',
  LEXUS: 'LEXUS',
  LAND_ROVER: 'LAND_ROVER',
  MERCEDES: 'MERCEDES',
  MAZDA: 'MAZDA',
  MINI: 'MINI',
  MITSUBISHI: 'MITSUBISHI',
  NISSAN: 'NISSAN',
  OPEL: 'OPEL',
  PEUGEOT: 'PEUGEOT',
  RENAULT: 'RENAULT',
  ROLLS_ROYCE: 'ROLLS_ROYCE',
  SEAT: 'SEAT',
  SKODA: 'SKODA',
  SETRA: 'SETRA',
  SCANIA: 'SCANIA',
  SPRITE_SPORT: 'SPRITE_SPORT',
  SAAB: 'SAAB',
  SUZUKI: 'SUZUKI',
  TOYOTA: 'TOYOTA',
  TRIUMPH: 'TRIUMPH',
  URSUS: 'URSUS',
  VOLKSWAGEN: 'VOLKSWAGEN',
  VOLVO: 'VOLVO',
  VAUXHALL: 'VAUXHALL',
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
