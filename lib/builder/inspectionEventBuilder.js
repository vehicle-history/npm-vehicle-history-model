var assert = require('assert-plus');
var date = require('../date');
var logger = require('../logger/logger').logger;
var InspectionEvent = require('../model/response/event/inspectionEvent').InspectionEvent;
var EventEnum = require('../enum/eventEnum').EventEnum;

var exports = {};

var getMileage = function getMileage(mileage) {
  if (!!mileage) {

    if (~~mileage === mileage) {
      return mileage;
    }
    //TODO replace or config
    return ~~mileage.replace(' ', '').replace('km', '').trim();
  }

  return null;
};

exports.build = function (event, options) {
  logger.debug('build inspection event:', event);

  assert.object(event, 'event');
  assert.string(event.date, 'event.date');
  assert.string(event.description, 'event.description');
//  assert.string(event.mileage, 'event.mileage');

  assert.object(options, 'options');

  var expireAt = event.date;
  var mileage = getMileage(event.mileage);

  //TODO
//  if (event.description) {
//    expireAt = true;
//  }


  return new InspectionEvent(
    EventEnum.INSPECTON,
    date.parseIsoString(event.date),
    event.description,
    date.parseIsoString(expireAt),
    mileage
  );
};

module.exports = exports;