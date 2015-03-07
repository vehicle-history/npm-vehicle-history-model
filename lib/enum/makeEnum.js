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
  DAIMLER: 'DAIMLER',
  DAEWOO: 'DAEWOO',
  DODGE: 'DODGE',
  FIAT: 'FIAT',
  FERRO: 'FERRO',
  FSO: 'FSO',
  FSM: 'FSM',
  FORD: 'FORD',
  HONDA: 'HONDA',
  HYUNDAI: 'HYUNDAI',
  JAGUAR: 'JAGUAR',
  JEEP: 'JEEP',
  YAMAHA: 'YAMAHA',
  KIA: 'KIA',
  KAWASAKI: 'KAWASAKI',
  LEXUS: 'LEXUS',
  LIAZ: 'LIAZ',
  LAND_ROVER: 'LAND_ROVER',
  MERCEDES: 'MERCEDES',
  MAZDA: 'MAZDA',
  MINI: 'MINI',
  MITSUBISHI: 'MITSUBISHI',
  NISSAN: 'NISSAN',
  OPEL: 'OPEL',
  PEUGEOT: 'PEUGEOT',
  RENAULT: 'RENAULT',
  ROVER: 'ROVER',
  ROLLS_ROYCE: 'ROLLS_ROYCE',
  ROMET_MOTORS: 'ROMET_MOTORS',
  SEAT: 'SEAT',
  SKODA: 'SKODA',
  SETRA: 'SETRA',
  SCANIA: 'SCANIA',
  SPRITE_SPORT: 'SPRITE_SPORT',
  SAAB: 'SAAB',
  SUZUKI: 'SUZUKI',
  TOYOTA: 'TOYOTA',
  TRIUMPH: 'TRIUMPH',
  TEMA: 'TEMA',
  URSUS: 'URSUS',
  VOLKSWAGEN: 'VOLKSWAGEN',
  VOLVO: 'VOLVO',
  VAUXHALL: 'VAUXHALL',
  WANGYE: 'WANGYE',
  WAZ: 'WAZ',
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
