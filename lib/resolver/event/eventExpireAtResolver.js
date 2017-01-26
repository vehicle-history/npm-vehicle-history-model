const assert = require('assert-plus');
const date = require('../../date');

const re = /.+(\d{2}\.\d{2}\.\d{4}).*/;

const resolve = function resolve(event/*, options*/) {
  assert.object(event, 'event');

  let expireAt = null;

  if (event.description) {

    const matches = event.description.match(re);

    if (matches) {
      expireAt = date.parseIsoString(matches[1]);
    }
  }

  return expireAt;
};

module.exports = {
  resolve: resolve
};
