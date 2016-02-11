var assert = require('assert-plus');
var date = require('../../date');

var resolve = function resolve(event/*, options*/) {
  assert.object(event, 'event');

  if (!event.date) {
    return null;
  }

  return date.parseIsoString(event.date);
};

module.exports = {
  resolve: resolve
};
