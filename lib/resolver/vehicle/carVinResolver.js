var assert = require('assert-plus');

var VIN_VALUE_MAP_FIELD = 'vin.value';

var resolve = function resolve(map/*, options*/) {
  assert.object(map, 'map');

};

module.exports = {
  resolve: resolve,
  VIN_VALUE_MAP_FIELD: VIN_VALUE_MAP_FIELD
};
