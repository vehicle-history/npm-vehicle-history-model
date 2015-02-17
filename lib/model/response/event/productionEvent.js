var AbstractEvent = require('./abstractEvent').AbstractEvent;

module.exports.ProductionEvent = function ProductionEvent(type, createdAt, description) {
  AbstractEvent.call(this, type, createdAt, description);
};
