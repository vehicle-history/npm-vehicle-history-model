const assert = require('assert-plus');
const OwnerEnum = require('../../enum/ownerEnum').OwnerEnum;

const resolve = function resolve(event, options) {
  assert.object(event, 'event');
  assert.object(options, 'options');

  const owner = event.owner || event.coowner || event.holder;

  if (!owner) {
    return null;
  }

  const ownerTypes = options.get('resolver.variant.owners');
  return OwnerEnum.getType(owner, ownerTypes);
};

module.exports = {
  resolve: resolve
};
