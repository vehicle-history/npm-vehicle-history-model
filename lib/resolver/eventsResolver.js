const assert = require('assert-plus');
const logger = require('../logger/logger').logger;

const resolvers = {
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

const resolver = function resolver(map, options, callback) {
  logger.debug('events resolver', map);

  assert.object(map, 'map');
  assert.object(options, 'options');
  assert.string(map['plate.country'], 'map[\'plate.country\']');

  const country = map['plate.country'];

  if (map.hasOwnProperty('events')) {
    const events = [];

    for (const event of map.events) {
      event.country = country;

      const newEvent = new Map();

      for (const field in resolvers) {
        if (resolvers.hasOwnProperty(field)) {
          var res = resolvers[field];
          const val = res.resolve(event, options);

          newEvent[field] = val;
        }
      }

      if (newEvent) {
        events.push(newEvent);
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
