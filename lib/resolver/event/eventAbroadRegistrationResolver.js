const assert = require('assert-plus');
const eventTypeResolver = require('./eventTypeResolver');

const resolve = function resolve(event, options) {
  assert.object(event, 'event');
  assert.object(options, 'options');

  const type = eventTypeResolver.resolve(event, options);

  switch (type) {
    case 'REGISTRATION':
      return false;
    case 'ABROAD_REGISTRATION':
      return true;
    default:
      return null;
  }

};


module.exports = {
  resolve: resolve
};
