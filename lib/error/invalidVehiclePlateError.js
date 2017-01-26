class InvalidVehiclePlateError extends Error {
  constructor(message) {
    super();
    this.name = 'InvalidVehiclePlateError';
    this.message = message;
  }
}

module.exports.InvalidVehiclePlateError = InvalidVehiclePlateError;
