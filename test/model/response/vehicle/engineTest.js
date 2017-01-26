const chai = require('chai');
const should = chai.should();
const engine = require('../../../../lib/model/response/vehicle/engine');

describe('engine model test', () => {

  const cubicCapacity = 'cubicCapacity';
  const fuel = 'fuel';

  it('should create model', done => {

    const engineModel = new engine.Engine(
      cubicCapacity,
      fuel
    );

    should.exist(engineModel);
    engineModel.cubicCapacity.should.be.equal(cubicCapacity);
    engineModel.fuel.should.be.equal(fuel);
    done();
  });

  it('should create model by builder', done => {

    const engineModel = new engine.EngineBuilder()
      .withCubicCapacity(cubicCapacity)
      .withFuel(fuel)
      .build();

    should.exist(engineModel);
    engineModel.cubicCapacity.should.be.equal(cubicCapacity);
    engineModel.fuel.should.be.equal(fuel);
    done();
  });

});
