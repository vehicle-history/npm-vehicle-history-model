var assert = require('assert-plus');
var MileageEnum = require('../../enum/mileageEnum').MileageEnum;
var mapHelper = require('./../../mapHelper');

var MILEAGE_VALUE_MAP_FIELD = 'mileage.value';
var MILEAGE_TYPE_MAP_FIELD = 'mileage.type';

var exports = {};

var getMileage = function getMileage(mileage, mileageTypes) {
  if (!!mileage) {

    if (~~mileage === mileage) {
      return mileage;
    }

    for (var i = 0; i < mileageTypes.length; ++i) {
      if (mileageTypes.hasOwnProperty(i)) {
        var mileageType = mileageTypes[i];
        mileage = mileage.replace(mileageType, '');
      }
    }

    return ~~mileage.replace(' ', '').trim();
  }

  return null;
};

var getMileageType = function getMileageType(mileage, mileageTypes) {
  if (!!mileage) {

    for (var i = 0; i < mileageTypes.length; ++i) {
      if (mileageTypes.hasOwnProperty(i)) {
        var mileageType = mileageTypes[i];

        if (mileage.indexOf(mileageType) > -1) {
          return mileageType;
        }
      }
    }
  }

  return null;
};

var getMileageTypes = function getMileageTypes(mileages) {
  var types = [];

  for (var i = 0; i < mileages.length; ++i) {
    if (mileages.hasOwnProperty(i)) {
      var mileageType = mileages[i];
      types = types.concat(mileageType.values);
    }
  }

  return types;
};

exports.resolve = function (map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  var mileages = options.get('resolver.variant.mileageStatus');
  var mileageTypes = getMileageTypes(mileages);

  var value = getMileage(mapHelper.getMapValue(map, MILEAGE_VALUE_MAP_FIELD), mileageTypes);
  var type = mapHelper.getMapValue(map, MILEAGE_TYPE_MAP_FIELD);

  if (!type) {
    type = getMileageType(mapHelper.getMapValue(map, MILEAGE_VALUE_MAP_FIELD), mileageTypes);
  }

  var mileageType = null;
  var mileageValue = null;

  //if missing value, then nulls
  if (value) {
    mileageType = MileageEnum.Type.getMileageType(type, mileages);
    mileageValue = mapHelper.getNaturalValueOrNull(value);
  }

  mapHelper.updateMapValue(map, MILEAGE_VALUE_MAP_FIELD, mileageValue);
  mapHelper.updateMapValue(map, MILEAGE_TYPE_MAP_FIELD, mileageType);
};

exports.MILEAGE_VALUE_MAP_FIELD = MILEAGE_VALUE_MAP_FIELD;
exports.MILEAGE_TYPE_MAP_FIELD = MILEAGE_TYPE_MAP_FIELD;


module.exports = exports;