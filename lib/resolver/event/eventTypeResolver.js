var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var EventEnum = require('../../enum/eventEnum').EventEnum;

var exports = {};

exports.resolve = function (event, options) {
  assert.object(event, 'event');
  assert.string(event.type, 'event.type');
  assert.object(options, 'options');

  var eventTypes = options.get('resolver.variant.events');
  return EventEnum.getEvent(event.type, eventTypes);
};


module.exports = exports;