var meta = require('./lib/meta');

module.exports = {
  /**
   * the CarEngineResolver class.
   * @property CarEngineResolver
   * @type CarEngineResolver
   * @static
   */
  CarEngineResolver: require('./lib/resolver/carEngineResolver'),

  /**
   * the CarInspectionResolver class.
   * @property CarInspectionResolver
   * @type CarInspectionResolver
   * @static
   */
  CarInspectionResolver: require('./lib/resolver/carInspectionResolver'),

  /**
   * the CarMileageResolver class.
   * @property CarMileageResolver
   * @type CarMileageResolver
   * @static
   */
  CarMileageResolver: require('./lib/resolver/carMileageResolver'),

  /**
   * the CarNameResolver class.
   * @property CarNameResolver
   * @type CarNameResolver
   * @static
   */
  CarNameResolver: require('./lib/resolver/carNameResolver'),

  /**
   * the CarPolicyResolver class.
   * @property CarPolicyResolver
   * @type CarPolicyResolver
   * @static
   */
  CarPolicyResolver: require('./lib/resolver/carPolicyResolver'),

  /**
   * the CarProductionResolver class.
   * @property CarProductionResolver
   * @type CarProductionResolver
   * @static
   */
  CarProductionResolver: require('./lib/resolver/carProductionResolver'),

  /**
   * the CarRegistrationyResolver class.
   * @property CarRegistrationyResolver
   * @type CarRegistrationyResolver
   * @static
   */
  CarRegistrationyResolver: require('./lib/resolver/carRegistrationyResolver'),

  /**
   * the CarStoleResolver class.
   * @property CarStoleResolver
   * @type CarStoleResolver
   * @static
   */
  CarStoleResolver: require('./lib/resolver/carStoleResolver'),

  /**
   * the CarVariantResolver class.
   * @property CarVariantResolver
   * @type CarVariantResolver
   * @static
   */
  CarVariantResolver: require('./lib/resolver/carVariantResolver'),

  /**
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


