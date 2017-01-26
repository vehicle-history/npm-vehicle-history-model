const assert = require('assert-plus');

const resolve = function resolve(event/*, options*/) {
  assert.object(event, 'event');

  if (!event.note) {
    return null;
  }

  return event.note;
};

module.exports = {
  resolve: resolve
};
