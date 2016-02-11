var assert = require('assert-plus');
var OwnerEnum = require('../../enum/ownerEnum').OwnerEnum;

var resolve = function resolve(event, options) {
  assert.object(event, 'event');
  assert.object(options, 'options');

  var owner = event.owner || event.coowner || event.holder;

  if (!owner) {
    return null;
  }

  var ownerTypes = options.get('resolver.variant.owners');
  return OwnerEnum.getType(owner, ownerTypes);
};

module.exports = {
  resolve: resolve
};
