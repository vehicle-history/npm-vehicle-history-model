var logger = require('../logger/logger').logger;
var Production = require('../model/response/production').Production;
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var PRODUCTION_YEAR_MAP_FIELD = 'production.year';

var exports = {};

exports.CarProductionResolver = function CarProductionResolver() {
  AbstractResolver.call(this);

  this.buildResponse = function (map/*, options*/) {
    var productionYear = this.getMapValue(map, PRODUCTION_YEAR_MAP_FIELD);

    if (this.onlyNullValues(productionYear)) {
      logger.warn('CarProductionResolver.buildResponse: Unable to parse car production fields (null values)');
      return null;
    }

    return new Production(~~productionYear);
  };
};


module.exports = exports;