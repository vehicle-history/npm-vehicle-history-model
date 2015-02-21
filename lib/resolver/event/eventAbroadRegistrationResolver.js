var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var eventTypeResolver = require('./eventTypeResolver');

var exports = {};

exports.resolve = function (event, options) {
  assert.object(event, 'event');
  assert.object(options, 'options');

  var type = eventTypeResolver.resolve(event, options);

  switch (type) {
    case 'REGISTRATION':
      return false;
    case 'ABROAD_REGISTRATION':
      return true;
    default:
      return null;
  }

};


module.exports = exports;