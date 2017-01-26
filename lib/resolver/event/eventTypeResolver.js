const assert = require('assert-plus');
const EventEnum = require('../../enum/eventEnum').EventEnum;

const resolve = function resolve(event, options) {
  assert.object(event, 'event');
  assert.string(event.type, 'event.type');
  assert.object(options, 'options');

  const eventTypes = options.get('resolver.variant.events');
  return EventEnum.getEvent(event.type, eventTypes);
};

module.exports = {
  resolve: resolve
};
