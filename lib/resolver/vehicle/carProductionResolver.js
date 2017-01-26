const assert = require('assert-plus');
require('../../date');
const mapHelper = require('./../../mapHelper');

const PRODUCTION_YEAR_MAP_FIELD = 'production.year';

const resolve = function resolve(map/*, options*/) {
  assert.object(map, 'map');

  let productionYear = ~~mapHelper.getMapValue(map, PRODUCTION_YEAR_MAP_FIELD);

  if (!productionYear || !Date.validateYear(productionYear)) {
    productionYear = null;
  }

  mapHelper.updateMapValue(map, PRODUCTION_YEAR_MAP_FIELD, productionYear);
};

module.exports = {
  resolve: resolve,
  PRODUCTION_YEAR_MAP_FIELD: PRODUCTION_YEAR_MAP_FIELD
};
