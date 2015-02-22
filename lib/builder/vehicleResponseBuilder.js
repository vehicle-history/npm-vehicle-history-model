var logger = require('../logger/logger').logger;
var CarBuilder = require('../model/response/car').CarBuilder;

var nameBuilder = require('./vehicle/nameBuilder');
var variantBuilder = require('./vehicle/variantBuilder');
var engineBuilder = require('./vehicle/engineBuilder');
var productionBuilder = require('./vehicle/productionBuilder');
var policyBuilder = require('./vehicle/policyBuilder');
var registrationBuilder = require('./vehicle/registrationBuilder');
var inspectionBuilder = require('./vehicle/inspectionBuilder');
var mileageBuilder = require('./vehicle/mileageBuilder');
var stoleBuilder = require('./vehicle/stoleBuilder');
var plateBuilder = require('./vehicle/plateBuilder');
var vinBuilder = require('./vehicle/vinBuilder');

var exports = {};

exports.build = function (map, callback) {
  logger.debug('build vehicle', map);

  var nameResponse = nameBuilder.build(map);
  var typeResponse = variantBuilder.build(map);
  var engine = engineBuilder.build(map);
  var production = productionBuilder.build(map);
  var policy = policyBuilder.build(map);
  var registration = registrationBuilder.build(map);
  var inspection = inspectionBuilder.build(map);
  var mileage = mileageBuilder.build(map);
  var stolen = stoleBuilder.build(map);
  var plate = plateBuilder.build(map);
  var vin = vinBuilder.build(map);

  var car = new CarBuilder()
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

module.exports = exports;