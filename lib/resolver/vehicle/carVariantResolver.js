const assert = require('assert-plus');
const VariantEnum = require('../../enum/variantEnum').VariantEnum;
const mapHelper = require('./../../mapHelper');

const VARIANT_TYPE_MAP_FIELD = 'variant.type';
const VARIANT_KIND_MAP_FIELD = 'variant.kind';

const resolve = function resolve(map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  const typeParsed = mapHelper.getMapValue(map, VARIANT_TYPE_MAP_FIELD);
  const kindParsed = mapHelper.getMapValue(map, VARIANT_KIND_MAP_FIELD);

  const variants = options.get('resolver.variant.types');
  const type = VariantEnum.Type.getType(typeParsed, variants);

  const kinds = options.get('resolver.variant.kinds');
  const kind = VariantEnum.Kind.getKind(kindParsed, kinds);

  mapHelper.updateMapValue(map, VARIANT_TYPE_MAP_FIELD, type);
  mapHelper.updateMapValue(map, VARIANT_KIND_MAP_FIELD, kind);
};

module.exports = {
  resolve: resolve,
  VARIANT_TYPE_MAP_FIELD: VARIANT_TYPE_MAP_FIELD,
  VARIANT_KIND_MAP_FIELD: VARIANT_KIND_MAP_FIELD
};
