module.exports.Car = function Car(name, type, engine, production, policy, registration, inspection, mileage, stolen, plate, vin) {
  this.name = name;
  this.type = type;
  this.engine = engine;
  this.production = production;
  this.policy = policy;
  this.registration = registration;
  this.inspection = inspection;
  this.mileage = mileage;
  this.stolen = stolen;
  this.plate = plate;
  this.vin = vin;

  this.getName = function () {
    return this.name;
  };

  this.getType = function () {
    return this.type;
  };

  this.getEngine = function () {
    return this.engine;
  };

  this.getProduction = function () {
    return this.production;
  };

  this.getPolicy = function () {
    return this.policy;
  };

  this.getRegistration = function () {
    return this.registration;
  };

  this.getInspection = function () {
    return this.inspection;
  };

  this.getMileage = function () {
    return this.mileage;
  };

  this.getStolen = function () {
    return this.stolen;
  };

  this.getPlate = function () {
    return this.plate;
  };

  this.getVin = function () {
    return this.vin;
  };
};