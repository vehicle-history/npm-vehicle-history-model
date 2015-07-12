var assert = require('assert-plus');

var exports = {};

exports.resolve = function (event/*, options*/) {
  assert.object(event, 'event');

  if (!event.note) {
    return null;
  }

  return event.note;
};


module.exports = exports;