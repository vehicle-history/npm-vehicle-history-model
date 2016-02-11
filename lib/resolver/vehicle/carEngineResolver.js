var assert = require('assert-plus');
var EngineEnum = require('../../enum/engineEnum').EngineEnum;
var mapHelper = require('./../../mapHelper');

var ENGINE_CUBIC_CAPACITY_MAP_FIELD = 'engine.cc';
var ENGINE_FUEL_TYPE_MAP_FIELD = 'engine.fuel';

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

var resolve = function resolve(map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  var cubicCapacity = getCubicCapacity(mapHelper.getMapValue(map, ENGINE_CUBIC_CAPACITY_MAP_FIELD));
  var fuel = mapHelper.getMapValue(map, ENGINE_FUEL_TYPE_MAP_FIELD);

  var engineFuels = options.get('resolver.variant.engineFuels');
  var cc = mapHelper.getNaturalValueOrNull(cubicCapacity);
  var fuelType = EngineEnum.FuelType.getFuelType(fuel, engineFuels);

  mapHelper.updateMapValue(map, ENGINE_CUBIC_CAPACITY_MAP_FIELD, cc);
  mapHelper.updateMapValue(map, ENGINE_FUEL_TYPE_MAP_FIELD, fuelType);
};

module.exports = {
  resolve: resolve,
  ENGINE_CUBIC_CAPACITY_MAP_FIELD: ENGINE_CUBIC_CAPACITY_MAP_FIELD,
  ENGINE_FUEL_TYPE_MAP_FIELD: ENGINE_FUEL_TYPE_MAP_FIELD
};
