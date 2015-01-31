var util = require('util');

var ServiceUnavailableError = function ServiceUnavailableError(message) {
  Error.call(this);
  this.name = 'ServiceUnavailableError';
  this.message = message;
};

util.inherits(ServiceUnavailableError, Error);

module.exports.ServiceUnavailableError = ServiceUnavailableError;