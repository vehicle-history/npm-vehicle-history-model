var logger = require('../logger/logger').logger;
var registrationEventBuilder = require('./event/registrationEventBuilder');
var deregistrationEventBuilder = require('./event/deregistrationEventBuilder');
var productionEventBuilder = require('./event/productionEventBuilder');
var changeOwnerEventBuilder = require('./event/changeOwnerEventBuilder');
var inspectionEventBuilder = require('./event/inspectionEventBuilder');

var exports = {};

exports.build = function (map, callback) {
  logger.debug('build events', map);

  var productionYear = map['production.year'];

  var events = [];

  if (productionYear) {
    var productionEvent = productionEventBuilder.build(null, productionYear);

    if (productionEvent) {
      events.push(productionEvent);
    }
  }

  if (map.hasOwnProperty('events')) {
    for (var i in map.events) {
      if (map.events.hasOwnProperty(i)) {
        var event = map.events[i];

        var newEvent = null;

        try {
          switch (event.type) {
            case 'PRODUCTION':
              newEvent = productionEventBuilder.build(event, productionYear);
              break;
            case 'REGISTRATION':
            case 'ABROAD_REGISTRATION':
              newEvent = registrationEventBuilder.build(event);
              break;
            case 'DEREGISTRATION':
              newEvent = deregistrationEventBuilder.build(event);
              break;
            case 'CHANGE_OWNER':
              newEvent = changeOwnerEventBuilder.build(event);
              break;
            case 'INSPECTON':
              newEvent = inspectionEventBuilder.build(event);
              break;

            default:
              logger.warn('unhandled event: ', event);
          }
        }
        catch (e) {
          logger.warn('Unable to parse event:', e);
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