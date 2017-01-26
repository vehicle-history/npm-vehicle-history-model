const assert = require('assert-plus');
const EngineEnum = require('../../enum/engineEnum').EngineEnum;
const mapHelper = require('./../../mapHelper');

const ENGINE_CUBIC_CAPACITY_MAP_FIELD = 'engine.cc';
const ENGINE_FUEL_TYPE_MAP_FIELD = 'engine.fuel';

const getCubicCapacity = function getCubicCapacity(cubicCapacity) {
  if (!!cubicCapacity) {

    if (~~cubicCapacity === cubicCapacity) {
      return cubicCapacity;
    }
    //TODO replace or config
    return ~~cubicCapacity.replace('cm³', '').trim();
  }

  return null;
};

const resolve = function resolve(map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  const cubicCapacity = getCubicCapacity(mapHelper.getMapValue(map, ENGINE_CUBIC_CAPACITY_MAP_FIELD));
  const fuel = mapHelper.getMapValue(map, ENGINE_FUEL_TYPE_MAP_FIELD);

  const engineFuels = options.get('resolver.variant.engineFuels');
  const cc = mapHelper.getNaturalValueOrNull(cubicCapacity);
  const fuelType = EngineEnum.FuelType.getFuelType(fuel, engineFuels);

  mapHelper.updateMapValue(map, ENGINE_CUBIC_CAPACITY_MAP_FIELD, cc);
  mapHelper.updateMapValue(map, ENGINE_FUEL_TYPE_MAP_FIELD, fuelType);
};

module.exports = {
  resolve: resolve,
  ENGINE_CUBIC_CAPACITY_MAP_FIELD: ENGINE_CUBIC_CAPACITY_MAP_FIELD,
  ENGINE_FUEL_TYPE_MAP_FIELD: ENGINE_FUEL_TYPE_MAP_FIELD
};
