var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var Variant = require('../../model/response/vehicle/variant').Variant;
var mapHelper = require('./../../mapHelper');
var carVariantResolver = require('./../../resolver/vehicle/carVariantResolver');

var build = function build(map) {
  assert.object(map, 'map');

  var type = mapHelper.getMapValue(map, carVariantResolver.VARIANT_TYPE_MAP_FIELD);
  var kind = mapHelper.getMapValue(map, carVariantResolver.VARIANT_KIND_MAP_FIELD);

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
