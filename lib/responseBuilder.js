var async = require('async');
var logger = require('../lib/logger/logger').logger;
var Report = require('./model/response/report').Report;
var carResponseBuilder = require('./carResponseBuilder');
var registrationEventBuilder = require('./builder/registrationEventBuilder');
var deregistrationEventBuilder = require('./builder/deregistrationEventBuilder');
var productionEventBuilder = require('./builder/productionEventBuilder');
var changeOwnerEventBuilder = require('./builder/changeOwnerEventBuilder');
var inspectionEventBuilder = require('./builder/inspectionEventBuilder');

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

        var events = [
          productionEventBuilder.build('01-11-2011'),
          changeOwnerEventBuilder.build('10-11-2011', true, 'PRIVATE', 'wielkopolskie', 'pl'),
          registrationEventBuilder.build('11-11-2011'),
          deregistrationEventBuilder.build('11-11-2011', 'PETITION_EXPIRED'),
          inspectionEventBuilder.build('21-01-2013', '21-01-2014'),
          inspectionEventBuilder.build('20-01-2014', '20-01-2015')
        ];
        return cb(null, events);
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