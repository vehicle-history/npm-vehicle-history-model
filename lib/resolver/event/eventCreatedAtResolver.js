const assert = require('assert-plus');
const date = require('../../date');

const resolve = function resolve(event/*, options*/) {
  assert.object(event, 'event');

  if (!event.date) {
    return null;
  }

  return date.parseIsoString(event.date);
};

module.exports = {
  resolve: resolve
};
