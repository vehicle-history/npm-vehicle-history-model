var meta = require('./lib/meta');

module.exports = {

  error: {
    VehicleNotFoundError: require('./lib/error/vehicleNotFoundError').VehicleNotFoundError,
    ServiceUnavailableError: require('./lib/error/serviceUnavailableError').ServiceUnavailableError,
    InvalidVehiclePlateError: require('./lib/error/invalidVehiclePlateError').InvalidVehiclePlateError
  },
  builder: {
    carResponseBuilder: require('./lib/builder/carResponseBuilder'),
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

  resolver: {
    /**
     * the CarEngineResolver class.
     * @property CarEngineResolver
     * @type CarEngineResolver
     * @static
     */
    CarEngineResolver: require('./lib/resolver/carEngineResolver').CarEngineResolver,

    /**
     * the CarInspectionResolver class.
     * @property CarInspectionResolver
     * @type CarInspectionResolver
     * @static
     */
    CarInspectionResolver: require('./lib/resolver/carInspectionResolver').CarInspectionResolver,

    /**
     * the CarMileageResolver class.
     * @property CarMileageResolver
     * @type CarMileageResolver
     * @static
     */
    CarMileageResolver: require('./lib/resolver/carMileageResolver').CarMileageResolver,

    /**
     * the CarNameResolver class.
     * @property CarNameResolver
     * @type CarNameResolver
     * @static
     */
    CarNameResolver: require('./lib/resolver/carNameResolver').CarNameResolver,

    /**
     * the CarPolicyResolver class.
     * @property CarPolicyResolver
     * @type CarPolicyResolver
     * @static
     */
    CarPolicyResolver: require('./lib/resolver/carPolicyResolver').CarPolicyResolver,

    /**
     * the CarProductionResolver class.
     * @property CarProductionResolver
     * @type CarProductionResolver
     * @static
     */
    CarProductionResolver: require('./lib/resolver/carProductionResolver').CarProductionResolver,

    /**
     * the CarRegistrationResolver class.
     * @property CarRegistrationResolver
     * @type CarRegistrationResolver
     * @static
     */
    CarRegistrationResolver: require('./lib/resolver/carRegistrationResolver').CarRegistrationResolver,

    /**
     * the CarStoleResolver class.
     * @property CarStoleResolver
     * @type CarStoleResolver
     * @static
     */
    CarStoleResolver: require('./lib/resolver/carStoleResolver').CarStoleResolver,

    /**
     * the CarVariantResolver class.
     * @property CarVariantResolver
     * @type CarVariantResolver
     * @static
     */
    CarVariantResolver: require('./lib/resolver/carVariantResolver').CarVariantResolver
  },

  /**
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


