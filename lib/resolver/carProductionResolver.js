var assert = require('assert-plus');
require('../date');
var logger = require('../logger/logger').logger;
var Production = require('../model/response/production').Production;
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var PRODUCTION_YEAR_MAP_FIELD = 'production.year';

var exports = {};

exports.CarProductionResolver = function CarProductionResolver() {
  AbstractResolver.call(this);

  this.resolve = function (map/*, options*/) {
    assert.object(map, 'map');

    var productionYear = ~~this.getMapValue(map, PRODUCTION_YEAR_MAP_FIELD);

    if (!productionYear || !Date.validateYear(productionYear)) {
      productionYear = null;
    }

    if (this.onlyNullValues(productionYear)) {
      logger.warn('CarProductionResolver.resolve: Unable to resolve car production fields (null values)');
      return null;
    }

    return new Production(productionYear);
  };
};
exports.CarProductionResolver.PRODUCTION_YEAR_MAP_FIELD = PRODUCTION_YEAR_MAP_FIELD;

module.exports = exports;