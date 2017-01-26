const assert = require('assert-plus');
const logger = require('../../logger/logger').logger;
const Variant = require('../../model/response/vehicle/variant').Variant;
const mapHelper = require('./../../mapHelper');
const carVariantResolver = require('./../../resolver/vehicle/carVariantResolver');

const build = function build(map) {
  assert.object(map, 'map');

  const type = mapHelper.getMapValue(map, carVariantResolver.VARIANT_TYPE_MAP_FIELD);
  const kind = mapHelper.getMapValue(map, carVariantResolver.VARIANT_KIND_MAP_FIELD);

  if (mapHelper.onlyNullValues(type, kind)) {
    logger.warn('CarVariantBuilder.build: Unable to build car variant fields (null values)');
    return null;
  }

  if ((!type || type === 'UNKNOWN') && (!kind || kind === 'UNKNOWN')) {
    return null;
  }

  return new Variant(type, kind);
};

module.exports = {
  build: build
};
