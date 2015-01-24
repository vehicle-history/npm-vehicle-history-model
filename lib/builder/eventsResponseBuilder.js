var logger = require('../logger/logger').logger;
var registrationEventBuilder = require('./registrationEventBuilder');
var deregistrationEventBuilder = require('./deregistrationEventBuilder');
var productionEventBuilder = require('./productionEventBuilder');
var changeOwnerEventBuilder = require('./changeOwnerEventBuilder');
var inspectionEventBuilder = require('./inspectionEventBuilder');

var exports = {};

exports.build = function (map, searchCarRequest, options, callback) {
  logger.debug('build events', map, searchCarRequest);

  var events = [
    productionEventBuilder.build('01-11-2011'),
    changeOwnerEventBuilder.build('10-11-2011', true, 'PRIVATE', 'wielkopolskie', 'pl'),
    registrationEventBuilder.build('11-11-2011'),
    deregistrationEventBuilder.build('11-11-2011', 'PETITION_EXPIRED'),
    inspectionEventBuilder.build('21-01-2013', '21-01-2014'),
    inspectionEventBuilder.build('20-01-2014', '20-01-2015')
  ];

  return callback(null, events);
};

module.exports = exports;