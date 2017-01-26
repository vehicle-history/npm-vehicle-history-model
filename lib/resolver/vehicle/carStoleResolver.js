const assert = require('assert-plus');
const mapHelper = require('./../../mapHelper');

const STATUS_STOLEN_MAP_FIELD = 'status.stolen';

const resolve = function resolve(map/*, options*/) {
  assert.object(map, 'map');

  const stolen = mapHelper.getMapValue(map, STATUS_STOLEN_MAP_FIELD);
  mapHelper.updateMapValue(map, STATUS_STOLEN_MAP_FIELD, !!stolen);
};

module.exports = {
  resolve: resolve,
  STATUS_STOLEN_MAP_FIELD: STATUS_STOLEN_MAP_FIELD
};
