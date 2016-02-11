var logger = require('../logger/logger').logger;

var resolvers = [
  require('./vehicle/carNameResolver'),
  require('./vehicle/carVariantResolver'),
  require('./vehicle/carEngineResolver'),
  require('./vehicle/carProductionResolver'),
  require('./vehicle/carPolicyResolver'),
  require('./vehicle/carRegistrationResolver'),
  require('./vehicle/carInspectionResolver'),
  require('./vehicle/carMileageResolver'),
  require('./vehicle/carStoleResolver'),
  require('./vehicle/carPlateResolver')
];

var resolver = function resolver(map, options, callback) {
  logger.debug('vehicle resolver', map);

  for (var i = 0; i < resolvers.length; ++i) {
    if (resolvers.hasOwnProperty(i)) {
      var resolver = resolvers[i];
      resolver.resolve(map, options);
    }
  }

  return callback(null, map);
};

module.exports = {
  resolver: resolver
};
