class ServiceUnavailableError extends Error {
  constructor(message) {
    super();
    this.name = 'ServiceUnavailableError';
    this.message = message;
  }
}

module.exports.ServiceUnavailableError = ServiceUnavailableError;