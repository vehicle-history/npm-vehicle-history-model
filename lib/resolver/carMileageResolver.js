var logger = require('../logger/logger').logger;
var Mileage = require('../model/response/mileage').Mileage;
var MileageEnum = require('../enum/mileageEnum').MileageEnum;
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var MILEAGE_VALUE_MAP_FIELD = 'mileage.value';
var MILEAGE_TYPE_MAP_FIELD = 'mileage.type';

var exports = {};

exports.CarMileageResolver = function CarMileageResolver() {
  AbstractResolver.call(this);

  this.buildResponse = function (map, options) {
    var value = this.getMapValue(map, MILEAGE_VALUE_MAP_FIELD);
    var type = this.getMapValue(map, MILEAGE_TYPE_MAP_FIELD);

    if (this.onlyNullValues(value, type)) {
      logger.warn('CarMileageResolver.buildResponse: Unable to parse car mileage fields (null values)');
      return null;
    }

    var mileageStatus = options.get('resolver.variant.mileageStatus');
    var mileageType = MileageEnum.Type.getMileageType(type, mileageStatus);
    var mileageValue = this.getNaturalValueOrNull(value);

    return new Mileage(mileageValue, mileageType);
  };
};


module.exports = exports;