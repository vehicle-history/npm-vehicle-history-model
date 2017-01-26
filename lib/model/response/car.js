class Car {
  constructor(name, type, engine, production, policy, registration, inspection, mileage, stolen, plate, vin) {
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
  }
}

class CarBuilder {
  constructor() {
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
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withType(type) {
    this.type = type;
    return this;
  }

  withEngine(engine) {
    this.engine = engine;
    return this;
  }

  withProduction(production) {
    this.production = production;
    return this;
  }

  withPolicy(policy) {
    this.policy = policy;
    return this;
  }

  withRegistration(registration) {
    this.registration = registration;
    return this;
  }

  withInspection(inspection) {
    this.inspection = inspection;
    return this;
  }

  withMileage(mileage) {
    this.mileage = mileage;
    return this;
  }

  withStolen(stolen) {
    this.stolen = stolen;
    return this;
  }

  withPlate(plate) {
    this.plate = plate;
    return this;
  }

  withVin(vin) {
    this.vin = vin;
    return this;
  }

  build() {
    return new Car(
      this.name,
      this.type,
      this.engine,
      this.production,
      this.policy,
      this.registration,
      this.inspection,
      this.mileage,
      this.stolen,
      this.plate,
      this.vin
    );
  }
}

module.exports = {
  Car: Car,
  CarBuilder: CarBuilder
};
