var assert = require('assert-plus');

var resolve = function resolve(event/*, options*/) {
  assert.object(event, 'event');

  if (!event.description) {
    return null;
  }

  return event.description;
};

module.exports = {
  resolve: resolve
};
