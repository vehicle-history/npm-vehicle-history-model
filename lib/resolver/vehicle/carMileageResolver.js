const assert = require('assert-plus');
const MileageEnum = require('../../enum/mileageEnum').MileageEnum;
const mapHelper = require('./../../mapHelper');

const MILEAGE_VALUE_MAP_FIELD = 'mileage.value';
const MILEAGE_TYPE_MAP_FIELD = 'mileage.type';

const getMileage = function getMileage(mileage, mileageTypes) {
  if (mileage) {

    if (~~mileage === mileage) {
      return mileage;
    }

    for (const mileageType of mileageTypes) {
      mileage = mileage.replace(mileageType, '');
    }

    return ~~mileage.replace(' ', '').trim();
  }

  return null;
};

const getMileageType = function getMileageType(mileage, mileageTypes) {
  if (mileage) {

    for (const mileageType of mileageTypes) {
      if (mileage.includes(mileageType)) {
        return mileageType;
      }
    }
  }

  return null;
};

const getMileageTypes = function getMileageTypes(mileageTypes) {
  let types = [];

  for (const mileageType of mileageTypes) {
    types = types.concat(mileageType.values);
  }

  return types;
};

const resolve = function resolve(map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  const mileages = options.get('resolver.variant.mileageStatus');
  const mileageTypes = getMileageTypes(mileages);

  const value = getMileage(mapHelper.getMapValue(map, MILEAGE_VALUE_MAP_FIELD), mileageTypes);
  let type = mapHelper.getMapValue(map, MILEAGE_TYPE_MAP_FIELD);

  if (!type) {
    type = getMileageType(mapHelper.getMapValue(map, MILEAGE_VALUE_MAP_FIELD), mileageTypes);
  }

  let mileageType = null;
  let mileageValue = null;

  //if missing value, then nulls
  if (value) {
    mileageType = MileageEnum.Type.getMileageType(type, mileages);
    mileageValue = mapHelper.getNaturalValueOrNull(value);
  }

  mapHelper.updateMapValue(map, MILEAGE_VALUE_MAP_FIELD, mileageValue);
  mapHelper.updateMapValue(map, MILEAGE_TYPE_MAP_FIELD, mileageType);
};

module.exports = {
  resolve: resolve,
  MILEAGE_VALUE_MAP_FIELD: MILEAGE_VALUE_MAP_FIELD,
  MILEAGE_TYPE_MAP_FIELD: MILEAGE_TYPE_MAP_FIELD
};
