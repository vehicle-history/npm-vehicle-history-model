var assert = require('assert-plus');
var logger = require('../logger/logger').logger;
var Engine = require('../model/response/engine').Engine;
var EngineEnum = require('../enum/engineEnum').EngineEnum;
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var ENGINE_CUBIC_CAPACITY_MAP_FIELD = 'engine.cc';
var ENGINE_FUEL_TYPE_MAP_FIELD = 'engine.fuel';

var exports = {};

var getCubicCapacity = function getCubicCapacity(cubicCapacity) {
  if (!!cubicCapacity) {

    if (~~cubicCapacity === cubicCapacity) {
      return cubicCapacity;
    }
    //TODO replace or config
    return ~~cubicCapacity.replace('cm³', '').trim();
  }

  return null;
};


exports.CarEngineResolver = function CarEngineResolver() {
  AbstractResolver.call(this);

  this.resolve = function (map, options) {
    assert.object(map, 'map');
    assert.object(options, 'options');

    var cubicCapacity = getCubicCapacity(this.getMapValue(map, ENGINE_CUBIC_CAPACITY_MAP_FIELD));
    var fuel = this.getMapValue(map, ENGINE_FUEL_TYPE_MAP_FIELD);

    if (this.onlyNullValues(cubicCapacity, fuel)) {
      logger.warn('CarEngineResolver.resolve: Unable to resolve car engine fields (null values)');
      return null;
    }

    if (!cubicCapacity) {
      return null;
    }

    var cc = this.getNaturalValueOrNull(cubicCapacity);
    var engineFuels = options.get('resolver.variant.engineFuels');
    var fuelType = EngineEnum.FuelType.getFuelType(fuel, engineFuels);

    return new Engine(cc, fuelType);
  };
};

exports.CarEngineResolver.ENGINE_CUBIC_CAPACITY_MAP_FIELD = ENGINE_CUBIC_CAPACITY_MAP_FIELD;
exports.CarEngineResolver.ENGINE_FUEL_TYPE_MAP_FIELD = ENGINE_FUEL_TYPE_MAP_FIELD;


module.exports = exports;