const logger = require('../logger/logger').logger;
const CarBuilder = require('../model/response/car').CarBuilder;

const nameBuilder = require('./vehicle/nameBuilder');
const variantBuilder = require('./vehicle/variantBuilder');
const engineBuilder = require('./vehicle/engineBuilder');
const productionBuilder = require('./vehicle/productionBuilder');
const policyBuilder = require('./vehicle/policyBuilder');
const registrationBuilder = require('./vehicle/registrationBuilder');
const inspectionBuilder = require('./vehicle/inspectionBuilder');
const mileageBuilder = require('./vehicle/mileageBuilder');
const stoleBuilder = require('./vehicle/stoleBuilder');
const plateBuilder = require('./vehicle/plateBuilder');
const vinBuilder = require('./vehicle/vinBuilder');

const build = function build(map, callback) {
  logger.debug('build vehicle', map);

  const nameResponse = nameBuilder.build(map);
  const typeResponse = variantBuilder.build(map);
  const engine = engineBuilder.build(map);
  const production = productionBuilder.build(map);
  const policy = policyBuilder.build(map);
  const registration = registrationBuilder.build(map);
  const inspection = inspectionBuilder.build(map);
  const mileage = mileageBuilder.build(map);
  const stolen = stoleBuilder.build(map);
  const plate = plateBuilder.build(map);
  const vin = vinBuilder.build(map);

  const car = new CarBuilder()
    .withName(nameResponse)
    .withType(typeResponse)
    .withEngine(engine)
    .withProduction(production)
    .withPolicy(policy)
    .withRegistration(registration)
    .withInspection(inspection)
    .withMileage(mileage)
    .withStolen(stolen)
    .withPlate(plate)
    .withVin(vin)
    .build();

  return callback(null, car);
};

module.exports = {
  build: build
};
