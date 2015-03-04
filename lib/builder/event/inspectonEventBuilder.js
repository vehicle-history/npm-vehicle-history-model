var assert = require('assert-plus');
var date = require('../../date');
var logger = require('../../logger/logger').logger;
var InspectionEventBuilder = require('../../model/response/event/inspectionEvent').InspectionEventBuilder;
var EventEnum = require('../../enum/eventEnum').EventEnum;

var exports = {};

exports.build = function (event) {
  logger.debug('build inspecton event:', event);

  assert.object(event, 'event');
  assert.string(event.type, 'event.type');
  assert.string(event.createdAt, 'event.createdAt');
  assert.string(event.description, 'event.description');

  return new InspectionEventBuilder()
    .withType(EventEnum.INSPECTON)
    .withCreatedAt(event.createdAt)
    .withDescription(event.description)
    .withExpireAt(event.expireAt)
    .withMileage(event.mileage)
    .build();
};

module.exports = exports;