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
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


