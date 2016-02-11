var assert = require('assert-plus');
var mapHelper = require('./../../mapHelper');

var STATUS_STOLEN_MAP_FIELD = 'status.stolen';

var resolve = function resolve(map/*, options*/) {
  assert.object(map, 'map');

  var stolen = mapHelper.getMapValue(map, STATUS_STOLEN_MAP_FIELD);
  mapHelper.updateMapValue(map, STATUS_STOLEN_MAP_FIELD, !!stolen);
};

module.exports = {
  resolve: resolve,
  STATUS_STOLEN_MAP_FIELD: STATUS_STOLEN_MAP_FIELD
};
