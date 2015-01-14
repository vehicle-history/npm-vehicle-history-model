var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var STATUS_STOLEN_MAP_FIELD = 'status.stolen';

var exports = {};

exports.CarStoleResolver = function CarStoleResolver() {
  AbstractResolver.call(this);

  this.resolve = function (map/*, options*/) {
    var stolen = this.getMapValue(map, STATUS_STOLEN_MAP_FIELD);
    return !!stolen;
  };
};


module.exports = exports;