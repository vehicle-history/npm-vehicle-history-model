var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var date = require('../../date');

var exports = {};

var re = /.+(\d{2}\.\d{2}\.\d{4}).*/;

exports.resolve = function (event/*, options*/) {
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


module.exports = exports;