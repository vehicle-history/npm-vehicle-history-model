var assert = require('assert-plus');

var VIN_VALUE_MAP_FIELD = 'vin.value';

var exports = {};

exports.resolve = function (map/*, options*/) {
  assert.object(map, 'map');

};

exports.VIN_VALUE_MAP_FIELD = VIN_VALUE_MAP_FIELD;

module.exports = exports;