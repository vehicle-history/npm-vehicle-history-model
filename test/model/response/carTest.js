var chai = require('chai');
var should = chai.should();
var car = require('../../../lib/model/response/car');

describe('car model test', function () {

  var name = {name: 'name'};
  var type = {type: 'type'};
  var engine = {engine: 'engine'};
  var production = {production: 'production'};
  var policy = {policy: 'policy'};
  var registration = {registration: 'registration'};
  var inspection = {inspection: 'inspection'};
  var mileage = {mileage: 'mileage'};
  var stolen = {stolen: 'stolen'};
  var plate = {plate: 'plate'};
  var vin = {vin: 'vin'};

  it('should create model', function (done) {

    var carModel = new car.Car(
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

  it('should create model by builder', function (done) {

    var carModel = new car.CarBuilder()
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