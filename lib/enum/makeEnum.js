var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.MakeEnum = {
  AUDI: 'AUDI',
  ALFA_ROMEO: 'ALFA_ROMEO',
  BMW: 'BMW',
  BENTLEY: 'BENTLEY',
  BRENDERUP: 'BRENDERUP',
  CHEVROLET: 'CHEVROLET',
  CHRYSLER: 'CHRYSLER',
  CITROEN: 'CITROEN',
  CASE_IH: 'CASE_IH',
  DACIA: 'DACIA',
  DAF: 'DAF',
  DAIMLER: 'DAIMLER',
  DAIHATSU: 'DAIHATSU',
  DAEWOO: 'DAEWOO',
  DODGE: 'DODGE',
  FIAT: 'FIAT',
  FERRO: 'FERRO',
  FSO: 'FSO',
  FSM: 'FSM',
  FORD: 'FORD',
  GMC: 'GMC',
  GNIOTPOL: 'GNIOTPOL',
  HONDA: 'HONDA',
  HYUNDAI: 'HYUNDAI',
  HYOSUNG: 'HYOSUNG',
  IVECO: 'IVECO',
  JAGUAR: 'JAGUAR',
  JEEP: 'JEEP',
  JONWAY: 'JONWAY',
  YAMAHA: 'YAMAHA',
  KIA: 'KIA',
  KAWASAKI: 'KAWASAKI',
  LANCIA: 'LANCIA',
  LDV: 'LDV',
  LEXUS: 'LEXUS',
  LIAZ: 'LIAZ',
  LAND_ROVER: 'LAND_ROVER',
  MERCEDES: 'MERCEDES',
  MAZDA: 'MAZDA',
  MINI: 'MINI',
  MITSUBISHI: 'MITSUBISHI',
  MAJESTIC_AUTO: 'MAJESTIC_AUTO',
  MZ: 'MZ',
  MAN: 'MAN',
  NISSAN: 'NISSAN',
  NIEWIADOW: 'NIEWIADOW',
  OPEL: 'OPEL',
  PEUGEOT: 'PEUGEOT',
  RENAULT: 'RENAULT',
  ROVER: 'ROVER',
  ROLLS_ROYCE: 'ROLLS_ROYCE',
  ROMET_MOTORS: 'ROMET_MOTORS',
  RIEJU: 'RIEJU',
  SAM: 'SAM',
  SIMSON: 'SIMSON',
  SEAT: 'SEAT',
  SKODA: 'SKODA',
  SETRA: 'SETRA',
  SCANIA: 'SCANIA',
  SPRITE_SPORT: 'SPRITE_SPORT',
  SAAB: 'SAAB',
  SUBARU: 'SUBARU',
  SMART: 'SMART',
  SUZUKI: 'SUZUKI',
  TATA: 'TATA',
  TOYOTA: 'TOYOTA',
  TRIUMPH: 'TRIUMPH',
  THULE: 'THULE',
  TEMA: 'TEMA',
  URSUS: 'URSUS',
  UAZ: 'UAZ',
  VOLKSWAGEN: 'VOLKSWAGEN',
  VOLVO: 'VOLVO',
  VAUXHALL: 'VAUXHALL',
  WANGYE: 'WANGYE',
  WAZ: 'WAZ',
  WSK: 'WSK',
  YAMASAKI: 'YAMASAKI',
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
