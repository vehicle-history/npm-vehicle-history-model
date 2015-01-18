var async = require('async');
var logger = require('../lib/logger/logger').logger;
var Report = require('./model/response/report').Report;
var carResponseBuilder = require('./carResponseBuilder');

var exports = {};

exports.build = function (map, searchCarRequest, options, callback) {
  logger.debug('generateReport');

  async.series({
      car: function (cb) {
        carResponseBuilder.build(map, searchCarRequest, options, cb);
      }
    },
    function (err, results) {

      if (err) {
        logger.error('unable to generate report in async call: %s', err);
        return callback(err);
      }

      var car = null;

      if (results.hasOwnProperty('car')) {
        car = results.car;
      }

      var report = new Report(car);
      return callback(err, report);
    });
};


module.exports = exports;