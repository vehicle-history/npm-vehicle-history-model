var assert = require('assert-plus');
var date = require('../date');
var logger = require('../logger/logger').logger;
var InspectionEvent = require('../model/response/event/inspectionEvent').InspectionEvent;
var EventEnum = require('../enum/eventEnum').EventEnum;
var MileageEnum = require('../enum/mileageEnum').MileageEnum;
var Mileage = require('../model/response/mileage').Mileage;

var re = /.+(\d{2}\.\d{2}\.\d{4}).*/;

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

var getMileageType = function getMileageType(mileage) {
  if (!!mileage) {
    if (mileage.indexOf("mile") > -1) {
      return 'mile';
    }
  }

  return 'km';
};

exports.build = function (event, options) {
  logger.debug('build inspection event:', event);

  assert.object(event, 'event');
  assert.string(event.date, 'event.date');
  assert.string(event.description, 'event.description');
//  assert.string(event.mileage, 'event.mileage');

  assert.object(options, 'options');

  var mileageValue = getMileage(event.mileage);
  var mileageType = getMileageType(event.mileage);

  var mileages = options.get('resolver.variant.mileageStatus');
  var mileageType = MileageEnum.Type.getMileageType(mileageType, mileages);

  var mileage = null;

  if (mileageValue) {
    mileage = new Mileage(mileageValue, mileageType)
  }

  var expireAt = null;

  if (event.description) {

    var matches = event.description.match(re);

    if (matches) {
      expireAt = date.parseIsoString(matches[1]);
    }
  }

  return new InspectionEvent(
    EventEnum.INSPECTON,
    date.parseIsoString(event.date),
    event.description,
    expireAt,
    mileage
  );
};

module.exports = exports;