var async = require('async');
var logger = require('../logger/logger').logger;
var ReportBuilder = require('./../model/response/report').ReportBuilder;
var vehicleResponseBuilder = require('./vehicleResponseBuilder');
var eventsResponseBuilder = require('./eventsResponseBuilder');

var exports = {};

var getPropertyIfExists = function (results, property) {
  if (results.hasOwnProperty(property)) {
    return results[property];
  }

  return null;
};

exports.build = function (map, options, callback) {
  logger.debug('build response');

  async.parallel({
      car: function (cb) {
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

      var car = getPropertyIfExists(results, 'car');
      var events = getPropertyIfExists(results, 'events');

      var report = new ReportBuilder()
        .withCar(car)
        .withEvents(events)
        .build();

      return callback(err, report);
    });
};


module.exports = exports;