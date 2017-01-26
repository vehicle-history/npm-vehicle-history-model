const date = require('../../date');
const logger = require('../../logger/logger').logger;
const ProductionEventBuilder = require('../../model/response/event/productionEvent').ProductionEventBuilder;
const EventEnum = require('../../enum/eventEnum').EventEnum;

const build = function build(event, productionYear) {
  logger.debug('build production event:', event);

  if (productionYear) {
    productionYear = `${productionYear}-01-01`;
  }
  else if (event && event.createdAt) {
    productionYear = event.createdAt;
  }

  const createdAt = date.parseIsoString(productionYear);

  if (!createdAt) {
    return null;
  }

  return new ProductionEventBuilder()
    .withType(EventEnum.PRODUCTION)
    .withCreatedAt(createdAt)
    .withDescription(`Rok produkcji: ${createdAt}`)
    .build();
};

module.exports = {
  build: build
};
