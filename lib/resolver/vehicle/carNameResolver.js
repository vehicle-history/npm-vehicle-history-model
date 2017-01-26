const assert = require('assert-plus');
const MakeEnum = require('../../enum/makeEnum').MakeEnum;
const mapHelper = require('./../../mapHelper');

const MANUFACTURER_MAP_FIELD = 'name.manufacturer';
const NAME_MAP_FIELD = 'name.name';
const MODEL_MAP_FIELD = 'name.model';

const resolve = function resolve(map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  const makeStr = mapHelper.getMapValue(map, MANUFACTURER_MAP_FIELD);
  const name = mapHelper.getMapValue(map, NAME_MAP_FIELD);
  const model = mapHelper.getMapValue(map, MODEL_MAP_FIELD);

  const makes = options.get('resolver.variant.makes');
  const make = MakeEnum.getMake(makeStr, makes);

  mapHelper.updateMapValue(map, NAME_MAP_FIELD, name);
  mapHelper.updateMapValue(map, MANUFACTURER_MAP_FIELD, make);
  mapHelper.updateMapValue(map, MODEL_MAP_FIELD, model);
};

module.exports = {
  resolve: resolve,
  MANUFACTURER_MAP_FIELD: MANUFACTURER_MAP_FIELD,
  NAME_MAP_FIELD: NAME_MAP_FIELD,
  MODEL_MAP_FIELD: MODEL_MAP_FIELD
};
