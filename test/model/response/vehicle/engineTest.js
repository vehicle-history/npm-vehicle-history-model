var chai = require('chai');
var should = chai.should();
var engine = require('../../../../lib/model/response/vehicle/engine');

describe('engine model test', function () {

  var cubicCapacity = 1234;
  var fuel = 'PETROL';

  it('should create model', function (done) {

    var engineModel = new engine.Engine(
      cubicCapacity,
      fuel
    );

    should.exist(engineModel);
    engineModel.cubicCapacity.should.be.equal(cubicCapacity);
    engineModel.fuel.should.be.equal(fuel);

    done();
  });

  it('should create model by builder', function (done) {

    var engineModel = new engine.EngineBuilder()
      .withCubicCapacity(cubicCapacity)
      .withFuel(fuel)
      .build();

    should.exist(engineModel);
    engineModel.cubicCapacity.should.be.equal(cubicCapacity);
    engineModel.fuel.should.be.equal(fuel);

    done();
  });

});