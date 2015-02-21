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
  model: {
    /**
     * the SearchCarRequest class.
     * @property SearchCarRequest
     * @type SearchCarRequest
     * @static
     */
    SearchCarRequest: require('./lib/model/searchCarRequest').SearchCarRequest,

    /**
     * the Car class.
     * @property Car
     * @type Car
     * @static
     */
    Car: require('./lib/model/response/car').Car,

    /**
     * the Report class.
     * @property Report
     * @type Report
     * @static
     */
    Report: require('./lib/model/response/report').Report
  },


  /**
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


