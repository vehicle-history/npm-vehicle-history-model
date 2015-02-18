var util = require('util');

var InvalidVehiclePlateError = function InvalidVehiclePlateError(message) {
  Error.call(this);
  this.name = 'InvalidVehiclePlateError';
  this.message = message;
};

util.inherits(InvalidVehiclePlateError, Error);

module.exports.InvalidVehiclePlateError = InvalidVehiclePlateError;
