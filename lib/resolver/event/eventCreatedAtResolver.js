var assert = require('assert-plus');
var date = require('../../date');

var exports = {};

exports.resolve = function (event/*, options*/) {
  assert.object(event, 'event');

  if (!event.date) {
    return null;
  }

  return date.parseIsoString(event.date);
};


module.exports = exports;