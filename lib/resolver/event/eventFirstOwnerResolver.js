const assert = require('assert-plus');

const resolve = function resolve(event/*, options*/) {
  assert.object(event, 'event');
  return null;
};

module.exports = {
  resolve: resolve
};
