var logger = require('../logger/logger').logger;
var Variant = require('../model/response/variant').Variant;
var VariantEnum = require('../enum/variantEnum').VariantEnum;
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var VARIANT_TYPE_MAP_FIELD = 'variant.type';
var VARIANT_KIND_MAP_FIELD = 'variant.kind';

var exports = {};

exports.CarVariantResolver = function CarVariantResolver() {
  AbstractResolver.call(this);

  this.resolve = function (map, options) {
    var typeParsed = this.getMapValue(map, VARIANT_TYPE_MAP_FIELD);
    var kindParsed = this.getMapValue(map, VARIANT_KIND_MAP_FIELD);

    if (this.onlyNullValues(typeParsed, kindParsed)) {
      logger.warn('CarVariantResolver.resolve: Unable to resolve car variant fields (null values)');
      return null;
    }

    var variants = options.get('resolver.variant.types');
    var type = VariantEnum.Type.getType(typeParsed, variants);

    var kinds = options.get('resolver.variant.kinds');
    var kind = VariantEnum.Kind.getKind(kindParsed, kinds);

    return new Variant(type, kind);
  };
};
exports.CarVariantResolver.VARIANT_TYPE_MAP_FIELD = VARIANT_TYPE_MAP_FIELD;
exports.CarVariantResolver.VARIANT_KIND_MAP_FIELD = VARIANT_KIND_MAP_FIELD;

module.exports = exports;