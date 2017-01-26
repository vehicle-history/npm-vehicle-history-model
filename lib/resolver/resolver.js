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
      (map, cb) => {
        eventsResolver.resolver(map, options, cb);
      },
      (map, cb) => {
        vehicleResolver.resolver(map, options, cb);
      }
    ],
    (err, map) => {
      if (err) {
        logger.error('unable to resolve map data: %s', err);
        return callback(err);
      }

      return callback(err, map);
    });
};

module.exports = {
  resolver: resolver
};
