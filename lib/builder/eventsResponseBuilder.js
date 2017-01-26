const logger = require('../logger/logger').logger;
const registrationEventBuilder = require('./event/registrationEventBuilder');
const deregistrationEventBuilder = require('./event/deregistrationEventBuilder');
const productionEventBuilder = require('./event/productionEventBuilder');
const changeOwnerEventBuilder = require('./event/changeOwnerEventBuilder');
const inspectionEventBuilder = require('./event/inspectionEventBuilder');
const coOwnerEventBuilder = require('./event/coOwnerEventBuilder');
const holderEventBuilder = require('./event/holderEventBuilder');
const changedRegistrationLocationEventBuilder = require('./event/changedRegistrationLocationEventBuilder');
const stolenEventBuilder = require('./event/stolenEventBuilder');

const build = function build(map, callback) {
  logger.debug('build events', map);

  const productionYear = map['production.year'];

  const events = [];

  if (productionYear) {
    const productionEvent = productionEventBuilder.build(null, productionYear);

    if (productionEvent) {
      events.push(productionEvent);
    }
  }

  if (map.hasOwnProperty('events')) {
    for (const event of map.events) {
      let newEvent = null;

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
          case 'INSPECTION':
            newEvent = inspectionEventBuilder.build(event);
            break;
          case 'CO_OWNER':
            newEvent = coOwnerEventBuilder.build(event);
            break;
          case 'HOLDER':
            newEvent = holderEventBuilder.build(event);
            break;
          case 'CHANGED_REGISTRATION_LOCATION':
            newEvent = changedRegistrationLocationEventBuilder.build(event);
            break;
          case 'STOLEN':
            newEvent = stolenEventBuilder.build(event);
            break;

          default:
            logger.warn('unhandled event: ', event, map);
        }
      }
      catch (e) {
        logger.warn('Unable to parse event:', e, map);
      }

      if (newEvent) {
        events.push(newEvent);
      }
    }
  }

  return callback(null, events);
};

module.exports = {
  build: build
};
