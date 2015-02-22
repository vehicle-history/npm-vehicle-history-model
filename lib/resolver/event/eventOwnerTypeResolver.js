var assert = require('assert-plus');
var logger = require('../../logger/logger').logger;
var OwnerEnum = require('../../enum/ownerEnum').OwnerEnum;
var exports = {};

exports.resolve = function (event, options) {
  assert.object(event, 'event');
  assert.object(options, 'options');

  if (!event.owner) {
    return null;
  }

  var ownerTypes = options.get('resolver.variant.owners');
  return OwnerEnum.getType(event.owner, ownerTypes);
};


module.exports = exports;