var async = require('async');
var logger = require('../logger/logger').logger;
var ReportBuilder = require('./../model/response/report').ReportBuilder;
var vehicleResponseBuilder = require('./vehicleResponseBuilder');
var eventsResponseBuilder = require('./eventsResponseBuilder');

var getPropertyIfExists = function (results, property) {
  if (results.hasOwnProperty(property)) {
    return results[property];
  }

  return null;
};

var build = function build(map, options, callback) {
  logger.debug('build response');

  async.parallel({
      vehicle: function (cb) {
        vehicleResponseBuilder.build(map, cb);
      },
      events: function (cb) {
        eventsResponseBuilder.build(map, cb);
      }
    },
    function (err, results) {

      if (err) {
        logger.error('unable to generate report in async call: %s', err);
        return callback(err);
      }

      var vehicle = getPropertyIfExists(results, 'vehicle');
      var events = getPropertyIfExists(results, 'events');

      var report = new ReportBuilder()
        .withVehicle(vehicle)
        .withEvents(events)
        .build();

      return callback(err, report);
    });
};

module.exports = {
  build: build
};
