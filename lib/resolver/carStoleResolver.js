var assert = require('assert-plus');
var AbstractResolver = require('./../resolver/abstractResolver').AbstractResolver;

var STATUS_STOLEN_MAP_FIELD = 'status.stolen';

var exports = {};

exports.CarStoleResolver = function CarStoleResolver() {
  AbstractResolver.call(this);

  this.resolve = function (map/*, options*/) {
    assert.object(map, 'map');

    var stolen = this.getMapValue(map, STATUS_STOLEN_MAP_FIELD);
    return !!stolen;
  };
};
exports.CarStoleResolver.STATUS_STOLEN_MAP_FIELD = STATUS_STOLEN_MAP_FIELD;

module.exports = exports;