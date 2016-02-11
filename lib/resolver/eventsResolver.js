var assert = require('assert-plus');
var logger = require('../logger/logger').logger;

var resolvers = {
  type: require('./event/eventTypeResolver'),
  ownerType: require('./event/eventOwnerTypeResolver'),
  location: require('./event/eventLocationResolver'),
  note: require('./event/eventNoteResolver'),
  createdAt: require('./event/eventCreatedAtResolver'),
  expireAt: require('./event/eventExpireAtResolver'),
  description: require('./event/eventDescriptionResolver'),
  firstOwner: require('./event/eventFirstOwnerResolver'),
  mileage: require('./event/eventMileageResolver'),
  abroadRegistration: require('./event/eventAbroadRegistrationResolver')
};

var resolver = function resolver(map, options, callback) {
  logger.debug('events resolver', map);

  assert.object(map, 'map');
  assert.object(options, 'options');
  assert.string(map['plate.country'], 'map[\'plate.country\']');

  var country = map['plate.country'];

  if (map.hasOwnProperty('events')) {
    var events = [];

    for (var i in map.events) {
      if (map.events.hasOwnProperty(i)) {
        var event = map.events[i];

        event.country = country;

        var newEvent = {};

        for (var field in resolvers) {
          if (resolvers.hasOwnProperty(field)) {
            var resolver = resolvers[field];
            var val = resolver.resolve(event, options);

            newEvent[field] = val;
          }
        }

        if (newEvent) {
          events.push(newEvent);
        }
      }
    }

    //override
    map.events = events;
  }

  return callback(null, map);
};

module.exports = {
  resolver: resolver
};
