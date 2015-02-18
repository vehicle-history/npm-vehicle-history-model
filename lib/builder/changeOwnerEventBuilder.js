var assert = require('assert-plus');
var date = require('../date');
var logger = require('../logger/logger').logger;
var ChangeOwnerEvent = require('../model/response/event/changeOwnerEvent').ChangeOwnerEvent;
var Location = require('../model/response/location').Location;
var EventEnum = require('../enum/eventEnum').EventEnum;
var OwnerEnum = require('../enum/ownerEnum').OwnerEnum;
var CountryEnum = require('../enum/countryEnum').CountryEnum;

var exports = {};

exports.build = function (event, options, country) {
  logger.debug('build changeOwner event:', event);

  assert.object(event, 'event');
  assert.string(event.date, 'event.date');
  assert.string(event.description, 'event.description');
  assert.string(event.owner, 'event.owner');
  assert.string(event.location, 'event.location');

  assert.object(options, 'options');

  assert.string(country, 'country');

  var ownerTypes = options.get('resolver.variant.owners');
  var ownerType = OwnerEnum.getType(event.owner, ownerTypes);

  var countries = options.get('resolver.variant.countries');
  var country = CountryEnum.getCountry(country, countries);

  return new ChangeOwnerEvent(
    EventEnum.CHANGE_OWNER,
    date.parseIsoString(event.date),
    event.description,
    true,
    ownerType,
    new Location(event.location, country)
  );
};

module.exports = exports;