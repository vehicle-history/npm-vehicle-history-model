var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;

var exports = {};

exports.resolve = function (event/*, options*/) {
  assert.object(event, 'event');

  if (!event.description) {
    return null;
  }

  return event.description;
};


module.exports = exports;