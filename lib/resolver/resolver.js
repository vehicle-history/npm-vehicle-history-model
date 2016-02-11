var async = require('async');
var logger = require('../logger/logger').logger;
var vehicleResolver = require('./vehicleResolver');
var eventsResolver = require('./eventsResolver');

var resolver = function resolver(map, searchCarRequest, options, callback) {
  logger.debug('resolver');

  map['plate.value'] = searchCarRequest.plate;
  map['plate.country'] = searchCarRequest.country;
  map['vin.value'] = searchCarRequest.vin;

  async.waterfall([
      function (cb) {
        return cb(null, map);
      },
      function (map, cb) {
        eventsResolver.resolver(map, options, cb);
      },
      function (map, cb) {
        vehicleResolver.resolver(map, options, cb);
      }
    ],
    function (err, map) {
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
