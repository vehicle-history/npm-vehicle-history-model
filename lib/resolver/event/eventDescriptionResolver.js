const assert = require('assert-plus');

const resolve = function resolve(event/*, options*/) {
  assert.object(event, 'event');

  if (!event.description) {
    return null;
  }

  return event.description;
};

module.exports = {
  resolve: resolve
};
