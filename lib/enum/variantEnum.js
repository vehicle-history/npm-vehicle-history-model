const logger = require('../logger/logger').logger;
const AbstractEnum = require('./abstractEnum').AbstractEnum;

module.exports.VariantEnum = function VariantEnum(type, kind) {
  this.type = type;
  this.kind = kind;

  this.getType = function () {
    return this.type;
  };

  this.getKind = function () {
    return this.kind;
  };
};

module.exports.VariantEnum.Type = {
  CAR: 'CAR',
  SPECIAL_CAR: 'SPECIAL_CAR',
  OTHER_CAR: 'OTHER_CAR',
  MOTORCYCLE: 'MOTORCYCLE',
  MOPED: 'MOPED',
  BUS: 'BUS',
  TRACTOR: 'TRACTOR',
  LIGHT_TRAILER: 'LIGHT_TRAILER',
  HEAVY_TRAILER: 'HEAVY_TRAILER',
  TRUCK: 'TRUCK',
  UNKNOWN: 'UNKNOWN',
  getType: function (type, variants) {
    let value = null;

    if (type) {
      type = type.toLowerCase();
      value = AbstractEnum.getValue(type, variants);
    }
    else {
      type = null;
    }

    if (value === null) {
      value = 'UNKNOWN';
      logger.warn(
        'VariantEnum.Type: Unable to get type from "%s" - set "%s" as default',
        type,
        value
      );
    }

    return module.exports.VariantEnum.Type[value];
  }
};

module.exports.VariantEnum.Kind = {
  //cars
  HATCHBACK: 'HATCHBACK',
  LIMOUSINE: 'LIMOUSINE',
  COUPE: 'COUPE',
  CONVERTIBLE: 'CONVERTIBLE',
  SEDAN: 'SEDAN',
  ESTATE: 'ESTATE',
  HEARSE: 'HEARSE',
  OFF_ROAD: 'OFF_ROAD',
  VAN: 'VAN',
  WAGON: 'WAGON',
  //motorcycles
  STANDARD: 'STANDARD',
  SPORT: 'SPORT',
  CRUISER: 'CRUISER',
  TOURING: 'TOURING',
  SPORT_TOURING: 'SPORT_TOURING',

  LOAD_CAPACITY_OF_8_TONS: 'LOAD_CAPACITY_OF_8_TONS',
  LOAD_CAPACITY_MORE_THAN_8_TONS: 'LOAD_CAPACITY_MORE_THAN_8_TONS',
  LOAD_CAPACITY_OF_2_TONS: 'LOAD_CAPACITY_OF_2_TONS',
  TROLLEY: 'TROLLEY',
  TRAILER: 'TRAILER',
  WHEELED: 'WHEELED',
  CITY: 'CITY',
  INTERCITY: 'INTERCITY',
  CRANE: 'CRANE',
  QUAD: 'QUAD',
  LOADER: 'LOADER',
  CISTERN: 'CISTERN',
  PLATFORM: 'PLATFORM',
  MPV: 'MPV',
  OTHER: 'OTHER',
  OTHER_NOT_CAMPING: 'OTHER_NOT_CAMPING',
  UNKNOWN: 'UNKNOWN',
  getKind: function (kind, kinds) {
    let value = null;

    if (kind) {
      kind = kind.toLowerCase();
      value = AbstractEnum.getValue(kind, kinds);
    }
    else {
      kind = null;
    }

    if (value === null) {
      value = 'UNKNOWN';
      logger.warn(
        'VariantEnum.Kind: Unable to get kind from "%s" - set "%s" as default',
        kind,
        value
      );
    }

    return module.exports.VariantEnum.Kind[value];
  }
};
