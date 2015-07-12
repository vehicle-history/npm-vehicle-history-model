var assert = require('assert-plus');
var VariantEnum = require('../../enum/variantEnum').VariantEnum;
var mapHelper = require('./../../mapHelper');

var VARIANT_TYPE_MAP_FIELD = 'variant.type';
var VARIANT_KIND_MAP_FIELD = 'variant.kind';

var exports = {};

exports.resolve = function (map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  var typeParsed = mapHelper.getMapValue(map, VARIANT_TYPE_MAP_FIELD);
  var kindParsed = mapHelper.getMapValue(map, VARIANT_KIND_MAP_FIELD);

  var variants = options.get('resolver.variant.types');
  var type = VariantEnum.Type.getType(typeParsed, variants);

  var kinds = options.get('resolver.variant.kinds');
  var kind = VariantEnum.Kind.getKind(kindParsed, kinds);

  mapHelper.updateMapValue(map, VARIANT_TYPE_MAP_FIELD, type);
  mapHelper.updateMapValue(map, VARIANT_KIND_MAP_FIELD, kind);
};

exports.VARIANT_TYPE_MAP_FIELD = VARIANT_TYPE_MAP_FIELD;
exports.VARIANT_KIND_MAP_FIELD = VARIANT_KIND_MAP_FIELD;

module.exports = exports;