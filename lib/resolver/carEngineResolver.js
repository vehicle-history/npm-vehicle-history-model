var logger = require('../logger/logger').logger;
var Engine = require('../model/response/engine').Engine;
var EngineEnum = require('../enum/engineEnum').EngineEnum;
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var ENGINE_CUBIC_CAPACITY_MAP_FIELD = 'engine.cc';
var ENGINE_FUEL_TYPE_MAP_FIELD = 'engine.fuel';

var exports = {};

exports.CarEngineResolver = function CarEngineResolver() {
  AbstractResolver.call(this);

  this.buildResponse = function (map, options) {
    var cubicCapacity = this.getMapValue(map, ENGINE_CUBIC_CAPACITY_MAP_FIELD);
    var fuel = this.getMapValue(map, ENGINE_FUEL_TYPE_MAP_FIELD);

    if (this.onlyNullValues(cubicCapacity, fuel)) {
      logger.warn('CarEngineResolver.buildResponse: Unable to parse car engine fields (null values)');
      return null;
    }

    var cc = this.getNaturalValueOrNull(cubicCapacity);
    var engineFuels = options.get('parser.variant.engineFuels');
    var fuelType = EngineEnum.FuelType.getFuelType(fuel, engineFuels);

    return new Engine(cc, fuelType);
  };
};


module.exports = exports;