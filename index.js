var meta = require('./lib/meta');

module.exports = {

  error: {
    VehicleNotFoundError: require('./lib/error/vehicleNotFoundError').VehicleNotFoundError,
    ServiceUnavailableError: require('./lib/error/serviceUnavailableError').ServiceUnavailableError,
    InvalidVehiclePlateError: require('./lib/error/invalidVehiclePlateError').InvalidVehiclePlateError
  },
  builder: {
    carResponseBuilder: require('./lib/builder/vehicleResponseBuilder'),
    eventsResponseBuilder: require('./lib/builder/eventsResponseBuilder'),
    responseBuilder: require('./lib/builder/responseBuilder')
  },
  resolver: {
    resolver: require('./lib/resolver/resolver'),
    eventsResolver: require('./lib/resolver/eventsResolver'),
    vehicleResolver: require('./lib/resolver/vehicleResolver')
  },
  enum: {
    eventEnum: require('./lib/enum/eventEnum'),
    variantEnum: require('./lib/enum/variantEnum')
  },
  model: {
    /**
     * the searchCarRequest model and builder.
     * @property searchCarRequest
     * @type searchCarRequest
     * @static
     */
    searchCarRequest: require('./lib/model/searchCarRequest'),

    /**
     * the car model and builder.
     * @property car
     * @type car
     * @static
     */
    car: require('./lib/model/response/car'),

    /**
     * the report model and builder.
     * @property report
     * @type report
     * @static
     */
    report: require('./lib/model/response/report'),

    /**
     * the vehicleReportsCollection model and builder.
     * @property vehicleReportsCollection
     * @type vehicleReportsCollection
     * @static
     */
    vehicleReportsCollection: require('./lib/model/response/vehicleReportsCollection'),

    changedRegistrationLocationEvent: require('./lib/model/response/event/changedRegistrationLocationEvent'),
    inspectionEvent: require('./lib/model/response/event/inspectionEvent'),
    location: require('./lib/model/response/vehicle/location'),
    mileage: require('./lib/model/response/vehicle/mileage')
  },

  /**
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


