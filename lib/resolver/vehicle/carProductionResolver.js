const assert = require('assert-plus');
const moment = require('moment');
const mapHelper = require('./../../mapHelper');

const PRODUCTION_YEAR_MAP_FIELD = 'production.year';

const resolve = function resolve(map/*, options*/) {
  assert.object(map, 'map');

  let productionYear = ~~mapHelper.getMapValue(map, PRODUCTION_YEAR_MAP_FIELD);

  if (!productionYear || !moment(productionYear, 'YYYY').isValid()) {
    productionYear = null;
  }

  mapHelper.updateMapValue(map, PRODUCTION_YEAR_MAP_FIELD, productionYear);
};

module.exports = {
  resolve: resolve,
  PRODUCTION_YEAR_MAP_FIELD: PRODUCTION_YEAR_MAP_FIELD
};
