var logger = require('../logger/logger').logger;
var ChangeOwnerEvent = require('../model/response/event/changeOwnerEvent').ChangeOwnerEvent;
var Location = require('../model/response/location').Location;
var EventEnum = require('../enum/eventEnum').EventEnum;

var exports = {};

exports.build = function (createdAt, firstTime, ownerType, locationState, locationCountry) {
  logger.debug('build changeOwner event createdAt: %s', createdAt);
  return new ChangeOwnerEvent(EventEnum.Type.CHANGE_OWNER, createdAt, firstTime, ownerType, new Location(locationState, locationCountry));
};

module.exports = exports;