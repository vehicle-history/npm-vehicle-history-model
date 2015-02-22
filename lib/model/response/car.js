var Car = function Car(name, type, engine, production, policy, registration, inspection, mileage, stolen, plate, vin) {
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
};

var CarBuilder = function CarBuilder() {
  this.name = null;
  this.type = null;
  this.engine = null;
  this.production = null;
  this.policy = null;
  this.registration = null;
  this.inspection = null;
  this.mileage = null;
  this.stolen = null;
  this.plate = null;
  this.vin = null;

  var self = this;

  this.withName = function (name) {
    self.name = name;
    return self;
  };

  this.withType = function (type) {
    self.type = type;
    return self;
  };

  this.withEngine = function (engine) {
    self.engine = engine;
    return self;
  };

  this.withProduction = function (production) {
    self.production = production;
    return self;
  };

  this.withPolicy = function (policy) {
    self.policy = policy;
    return self;
  };

  this.withRegistration = function (registration) {
    self.registration = registration;
    return self;
  };

  this.withInspection = function (inspection) {
    self.inspection = inspection;
    return self;
  };

  this.withMileage = function (mileage) {
    self.mileage = mileage;
    return self;
  };

  this.withStolen = function (stolen) {
    self.stolen = stolen;
    return self;
  };

  this.withPlate = function (plate) {
    self.plate = plate;
    return self;
  };

  this.withVin = function (vin) {
    self.vin = vin;
    return self;
  };

  this.build = function () {
    return new Car(
      self.name,
      self.type,
      self.engine,
      self.production,
      self.policy,
      self.registration,
      self.inspection,
      self.mileage,
      self.stolen,
      self.plate,
      self.vin
    );
  };

};

module.exports = exports = {
  Car: Car,
  CarBuilder: CarBuilder
};