var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var MakeEnum = require('../../enum/makeEnum').MakeEnum;
var mapHelper = require('./../../mapHelper');

var MANUFACTURER_MAP_FIELD = 'name.manufacturer';
var NAME_MAP_FIELD = 'name.name';
var MODEL_MAP_FIELD = 'name.model';

var exports = {};

exports.resolve = function (map, options) {
  assert.object(map, 'map');
  assert.object(options, 'options');

  var makeStr = mapHelper.getMapValue(map, MANUFACTURER_MAP_FIELD);
  var name = mapHelper.getMapValue(map, NAME_MAP_FIELD);
  var model = mapHelper.getMapValue(map, MODEL_MAP_FIELD);

  var makes = options.get('resolver.variant.makes');
  var make = MakeEnum.getMake(makeStr, makes);

  mapHelper.updateMapValue(map, NAME_MAP_FIELD, name);
  mapHelper.updateMapValue(map, MANUFACTURER_MAP_FIELD, make);
  mapHelper.updateMapValue(map, MODEL_MAP_FIELD, model);
};

exports.MANUFACTURER_MAP_FIELD = MANUFACTURER_MAP_FIELD;
exports.NAME_MAP_FIELD = NAME_MAP_FIELD;
exports.MODEL_MAP_FIELD = MODEL_MAP_FIELD;

module.exports = exports;