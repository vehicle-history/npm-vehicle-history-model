const chai = require('chai');
const should = chai.should();
const car = require('../../../lib/model/response/car');

describe('car model test', () => {

  const name = 'name';
  const type = 'type';
  const engine = 'engine';
  const production = 'production';
  const policy = 'policy';
  const registration = 'registration';
  const inspection = 'inspection';
  const mileage = 'mileage';
  const stolen = 'stolen';
  const plate = 'plate';
  const vin = 'vin';

  it('should create model', done => {

    const carModel = new car.Car(
      name,
      type,
      engine,
      production,
      policy,
      registration,
      inspection,
      mileage,
      stolen,
      plate,
      vin
    );

    should.exist(carModel);
    carModel.name.should.be.equal(name);
    carModel.type.should.be.equal(type);
    carModel.engine.should.be.equal(engine);
    carModel.production.should.be.equal(production);
    carModel.policy.should.be.equal(policy);
    carModel.registration.should.be.equal(registration);
    carModel.inspection.should.be.equal(inspection);
    carModel.mileage.should.be.equal(mileage);
    carModel.stolen.should.be.equal(stolen);
    carModel.plate.should.be.equal(plate);
    carModel.vin.should.be.equal(vin);
    done();
  });

  it('should create model by builder', done => {

    const carModel = new car.CarBuilder()
      .withName(name)
      .withType(type)
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

    should.exist(carModel);
    carModel.name.should.be.equal(name);
    carModel.type.should.be.equal(type);
    carModel.engine.should.be.equal(engine);
    carModel.production.should.be.equal(production);
    carModel.policy.should.be.equal(policy);
    carModel.registration.should.be.equal(registration);
    carModel.inspection.should.be.equal(inspection);
    carModel.mileage.should.be.equal(mileage);
    carModel.stolen.should.be.equal(stolen);
    carModel.plate.should.be.equal(plate);
    carModel.vin.should.be.equal(vin);
    done();
  });

});
