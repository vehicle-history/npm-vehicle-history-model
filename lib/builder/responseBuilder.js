var async = require('async');
var logger = require('../logger/logger').logger;
var Report = require('./../model/response/report').Report;
var carResponseBuilder = require('./carResponseBuilder');
var eventsResponseBuilder = require('./eventsResponseBuilder');

var exports = {};

var getPropertyIfExists = function (results, property) {
  if (results.hasOwnProperty(property)) {
    return results[property];
  }

  return null;
};

exports.build = function (map, searchCarRequest, options, callback) {
  logger.debug('build response');

  async.series({
      car: function (cb) {
        carResponseBuilder.build(map, searchCarRequest, options, cb);
      },
      events: function (cb) {
        eventsResponseBuilder.build(map, searchCarRequest, options, cb);
      }
    },
    function (err, results) {

      if (err) {
        logger.error('unable to generate report in async call: %s', err);
        return callback(err);
      }

      var car = getPropertyIfExists(results, 'car');
      var events = getPropertyIfExists(results, 'events');

      var report = new Report(car, events);
      return callback(err, report);
    });
};


module.exports = exports;