var logger = require('../logger/logger').logger;
var AbstractEnum = require('./abstractEnum').AbstractEnum;

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
  VAN: 'VAN',
  getType: function (type, variants) {
    var value = null;

    if (type) {
      type = type.toLowerCase();

      value = AbstractEnum.getValue(type, variants);
    }

    if (value === null) {
      value = 'CAR';
      logger.warn('VariantEnum.Type: Unable to get type from "%s" - set "%s" as default', type, value);
    }

    return module.exports.VariantEnum.Type[value];
  }
};

module.exports.VariantEnum.Kind = {
  HATCHBACK: 'HATCHBACK',
  LIMOUSINE: 'LIMOUSINE',
  COUPE: 'COUPE',
  SEDAN: 'SEDAN',
  ESTATE: 'ESTATE',
  HEARSE: 'HEARSE',
  OTHER: 'OTHER',
  getKind: function (type, kinds) {
    var value = null;

    if (type) {
      type = type.toLowerCase();

      value = AbstractEnum.getValue(type, kinds);
    }

    if (value === null) {
      value = 'OTHER';
      logger.warn('VariantEnum.Kind: Unable to get kind from "%s" - set "%s" as default', type, value);
    }

    return module.exports.VariantEnum.Kind[value];
  }
};
