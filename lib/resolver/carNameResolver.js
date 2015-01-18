var logger = require('../logger/logger').logger;
var Name = require('../model/response/name').Name;
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var MANUFACTURER_MAP_FIELD = 'name.manufacturer';
var NAME_MAP_FIELD = 'name.name';
var MODEL_MAP_FIELD = 'name.model';

var exports = {};

exports.CarNameResolver = function CarNameResolver() {
  AbstractResolver.call(this);

  this.resolve = function (map/*, options*/) {
    var make = this.getMapValue(map, MANUFACTURER_MAP_FIELD);
    var name = this.getMapValue(map, NAME_MAP_FIELD);
    var model = this.getMapValue(map, MODEL_MAP_FIELD);

    if (this.onlyNullValues(make, name, model)) {
      logger.warn('CarNameResolver.resolve: Unable to resolve car name fields (null values)');
      return null;
    }

    return new Name(make, name, model);
  };
};
exports.CarNameResolver.MANUFACTURER_MAP_FIELD = MANUFACTURER_MAP_FIELD;
exports.CarNameResolver.NAME_MAP_FIELD = NAME_MAP_FIELD;
exports.CarNameResolver.MODEL_MAP_FIELD = MODEL_MAP_FIELD;

module.exports = exports;