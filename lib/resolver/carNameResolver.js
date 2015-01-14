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
    var manufacturer = this.getMapValue(map, MANUFACTURER_MAP_FIELD);
    var name = this.getMapValue(map, NAME_MAP_FIELD);
    var model = this.getMapValue(map, MODEL_MAP_FIELD);

    if (this.onlyNullValues(manufacturer, name, model)) {
      logger.warn('CarNameResolver.resolve: Unable to resolve car name fields (null values)');
      return null;
    }

    return new Name(manufacturer, name, model);
  };
};


module.exports = exports;