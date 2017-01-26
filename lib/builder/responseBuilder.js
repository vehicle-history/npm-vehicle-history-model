const async = require('async');
const logger = require('../logger/logger').logger;
const ReportBuilder = require('./../model/response/report').ReportBuilder;
const vehicleResponseBuilder = require('./vehicleResponseBuilder');
const eventsResponseBuilder = require('./eventsResponseBuilder');

const getPropertyIfExists = (results, property) => {
  if (results.hasOwnProperty(property)) {
    return results[property];
  }

  return null;
};

const build = function build(map, options, callback) {
  logger.debug('build response');

  async.parallel({
      vehicle: function (cb) {
        vehicleResponseBuilder.build(map, cb);
      },
      events: function (cb) {
        eventsResponseBuilder.build(map, cb);
      }
    },
    (err, results) => {

      if (err) {
        logger.error('unable to generate report in async call: %s', err);
        return callback(err);
      }

      const vehicle = getPropertyIfExists(results, 'vehicle');
      const events = getPropertyIfExists(results, 'events');

      const report = new ReportBuilder()
        .withVehicle(vehicle)
        .withEvents(events)
        .build();

      return callback(err, report);
    });
};

module.exports = {
  build: build
};
