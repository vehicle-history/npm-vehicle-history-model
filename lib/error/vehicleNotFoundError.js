class VehicleNotFoundError extends Error {
  constructor(message) {
    super();
    this.name = 'VehicleNotFoundError';
    this.message = message;
  }
}

module.exports.VehicleNotFoundError = VehicleNotFoundError;
