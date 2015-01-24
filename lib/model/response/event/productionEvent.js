var AbstractEvent = require('./abstractEvent').AbstractEvent;

module.exports.ProductionEvent = function ProductionEvent(type, createdAt) {
  AbstractEvent.call(this, type, createdAt);
};
