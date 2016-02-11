var assert = require('assert-plus');
require('../../date');
var mapHelper = require('./../../mapHelper');

var PRODUCTION_YEAR_MAP_FIELD = 'production.year';

var resolve = function resolve(map/*, options*/) {
  assert.object(map, 'map');

  var productionYear = ~~mapHelper.getMapValue(map, PRODUCTION_YEAR_MAP_FIELD);

  if (!productionYear || !Date.validateYear(productionYear)) {
    productionYear = null;
  }

  mapHelper.updateMapValue(map, PRODUCTION_YEAR_MAP_FIELD, productionYear);
};

module.exports = {
  resolve: resolve,
  PRODUCTION_YEAR_MAP_FIELD: PRODUCTION_YEAR_MAP_FIELD
};
