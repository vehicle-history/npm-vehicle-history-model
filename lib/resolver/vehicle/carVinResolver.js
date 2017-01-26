const assert = require('assert-plus');

const VIN_VALUE_MAP_FIELD = 'vin.value';

const resolve = function resolve(map/*, options*/) {
  assert.object(map, 'map');

};

module.exports = {
  resolve: resolve,
  VIN_VALUE_MAP_FIELD: VIN_VALUE_MAP_FIELD
};
