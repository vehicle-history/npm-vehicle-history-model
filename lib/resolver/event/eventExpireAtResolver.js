var assert = require('assert-plus');
var date = require('../../date');

var re = /.+(\d{2}\.\d{2}\.\d{4}).*/;

var resolve = function resolve(event/*, options*/) {
  assert.object(event, 'event');

  var expireAt = null;

  if (event.description) {

    var matches = event.description.match(re);

    if (matches) {
      expireAt = date.parseIsoString(matches[1]);
    }
  }

  return expireAt;
};

module.exports = {
  resolve: resolve
};
