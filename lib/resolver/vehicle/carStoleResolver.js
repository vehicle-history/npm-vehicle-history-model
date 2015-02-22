var assert = require('assert-plus');
var mapHelper = require('./../../mapHelper');

var STATUS_STOLEN_MAP_FIELD = 'status.stolen';

var exports = {};

exports.resolve = function (map/*, options*/) {
  assert.object(map, 'map');

  var stolen = mapHelper.getMapValue(map, STATUS_STOLEN_MAP_FIELD);
  mapHelper.updateMapValue(map, STATUS_STOLEN_MAP_FIELD, !!stolen);
};

exports.STATUS_STOLEN_MAP_FIELD = STATUS_STOLEN_MAP_FIELD;

module.exports = exports;