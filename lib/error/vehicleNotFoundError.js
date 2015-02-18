var util = require('util');

var VehicleNotFoundError = function VehicleNotFoundError(message) {
  Error.call(this);
  this.name = 'VehicleNotFoundError';
  this.message = message;
};

util.inherits(VehicleNotFoundError, Error);

module.exports.VehicleNotFoundError = VehicleNotFoundError;
