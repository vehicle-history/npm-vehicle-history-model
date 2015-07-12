var assert = require('assert-plus');
require('../../date');
var mapHelper = require('./../../mapHelper');

var PRODUCTION_YEAR_MAP_FIELD = 'production.year';

var exports = {};

exports.resolve = function (map/*, options*/) {
  assert.object(map, 'map');

  var productionYear = ~~mapHelper.getMapValue(map, PRODUCTION_YEAR_MAP_FIELD);

  if (!productionYear || !Date.validateYear(productionYear)) {
    productionYear = null;
  }

  mapHelper.updateMapValue(map, PRODUCTION_YEAR_MAP_FIELD, productionYear);
};

exports.PRODUCTION_YEAR_MAP_FIELD = PRODUCTION_YEAR_MAP_FIELD;

module.exports = exports;