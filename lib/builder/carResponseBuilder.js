var logger = require('../logger/logger').logger;
var CarNameResolver = require('../resolver/carNameResolver').CarNameResolver;
var CarVariantResolver = require('../resolver/carVariantResolver').CarVariantResolver;
var CarEngineResolver = require('../resolver/carEngineResolver').CarEngineResolver;
var CarProductionResolver = require('../resolver/carProductionResolver').CarProductionResolver;
var CarPolicyResolver = require('../resolver/carPolicyResolver').CarPolicyResolver;
var CarRegistrationResolver = require('../resolver/carRegistrationResolver').CarRegistrationResolver;
var CarInspectionResolver = require('../resolver/carInspectionResolver').CarInspectionResolver;
var CarMileageResolver = require('../resolver/carMileageResolver').CarMileageResolver;
var CarStoleResolver = require('../resolver/carStoleResolver').CarStoleResolver;
var CarPlateResolver = require('../resolver/carPlateResolver').CarPlateResolver;

var Car = require('../model/response/car').Car;

var carNameResolver = new CarNameResolver();
var carVariantResolver = new CarVariantResolver();
var carEngineResolver = new CarEngineResolver();
var carProductionResolver = new CarProductionResolver();
var carPolicyResolver = new CarPolicyResolver();
var carRegistrationResolver = new CarRegistrationResolver();
var carInspectionResolver = new CarInspectionResolver();
var carMileageResolver = new CarMileageResolver();
var carStoleResolver = new CarStoleResolver();
var carPlateResolver = new CarPlateResolver();

var exports = {};


exports.build = function (map, searchCarRequest, options, callback) {
  logger.debug('build car', map, searchCarRequest);

  var nameResponse = carNameResolver.resolve(map, options);
  var typeResponse = carVariantResolver.resolve(map, options);
  var engine = carEngineResolver.resolve(map, options);
  var production = carProductionResolver.resolve(map, options);
  var policy = carPolicyResolver.resolve(map, options);
  var registration = carRegistrationResolver.resolve(map, options);
  var inspection = carInspectionResolver.resolve(map, options);
  var mileage = carMileageResolver.resolve(map, options);
  var stolen = carStoleResolver.resolve(map, options);
  var plate = carPlateResolver.resolve(map, options, searchCarRequest.getPlate());

  var car = new Car(nameResponse, typeResponse, engine, production, policy, registration, inspection, mileage, stolen, plate, searchCarRequest.getVin());
  return callback(null, car);
};

module.exports = exports;