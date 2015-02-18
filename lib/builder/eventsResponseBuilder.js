var logger = require('../logger/logger').logger;
var EventEnum = require('../enum/eventEnum').EventEnum;
var registrationEventBuilder = require('./registrationEventBuilder');
var deregistrationEventBuilder = require('./deregistrationEventBuilder');
var productionEventBuilder = require('./productionEventBuilder');
var changeOwnerEventBuilder = require('./changeOwnerEventBuilder');
var inspectionEventBuilder = require('./inspectionEventBuilder');

var exports = {};

exports.build = function (map, searchCarRequest, options, callback) {
  logger.debug('build events', map, searchCarRequest);

  var eventTypes = options.get('resolver.variant.events');
  var productionYear = map['production.year'];
  var country = map['plate.country'];

  var events = [];

  if (productionYear) {
    var productionEvent = productionEventBuilder.build(null, options, productionYear);

    if (productionEvent) {
      events.push(productionEvent);
    }
  }

  if (map.hasOwnProperty('events')) {
    for (var i in map.events) {
      if (map.events.hasOwnProperty(i)) {
        var event = map.events[i];

        var newEvent = null;
        var eventType = EventEnum.getEvent(event.type, eventTypes);

        switch (eventType) {
          case 'PRODUCTION':
            newEvent = productionEventBuilder.build(event, options, productionYear);
            break;
          case 'REGISTRATION':
            newEvent = registrationEventBuilder.build(event, options, false);
            break;
          case 'ABROAD_REGISTRATION':
            newEvent = registrationEventBuilder.build(event, options, true);
            break;
          case 'DEREGISTRATION':
            newEvent = deregistrationEventBuilder.build(event, options);
            break;
          case 'CHANGE_OWNER':
            newEvent = changeOwnerEventBuilder.build(event, options, country);
            break;
          case 'INSPECTON':
            newEvent = inspectionEventBuilder.build(event, options);
            break;

          default:
            logger.warn('unhandled event: ', event);
        }

        if (newEvent) {
          events.push(newEvent);
        }
      }
    }
  }

  return callback(null, events);
};

module.exports = exports;