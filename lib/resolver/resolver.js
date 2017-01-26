const async = require('async');
const logger = require('../logger/logger').logger;
const vehicleResolver = require('./vehicleResolver');
const eventsResolver = require('./eventsResolver');

const resolver = function resolver(map, searchCarRequest, options, callback) {
  logger.debug('resolver');

  map['plate.value'] = searchCarRequest.plate;
  map['plate.country'] = searchCarRequest.country;
  map['vin.value'] = searchCarRequest.vin;

  async.waterfall([
      cb => cb(null, map),
      (eventsMap, cb) => {
        eventsResolver.resolver(eventsMap, options, cb);
      },
      (vehiclesMap, cb) => {
        vehicleResolver.resolver(vehiclesMap, options, cb);
      }
    ],
    (err, results) => {
      if (err) {
        logger.error('unable to resolve map data: %s', err);
        return callback(err);
      }

      return callback(err, results);
    });
};

module.exports = {
  resolver: resolver
};
