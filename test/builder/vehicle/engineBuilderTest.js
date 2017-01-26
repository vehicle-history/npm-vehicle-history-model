const options = require('config');
const engineBuilder = require('../../../lib/builder/vehicle/engineBuilder');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car engine builder test', () => {

  it('should return valid cc and fuel type', done => {

    const map = {
      'engine.cc': 1398,
      'engine.fuel': 'PETROL'
    };

    const response = engineBuilder.build(map);

    should.exist(response);
    should.exist(response.cubicCapacity);
    response.cubicCapacity.should.equal(1398);
    should.exist(response.fuel);
    response.fuel.should.equal('PETROL');
    done();
  });

  it('should return null for missing cc', done => {

    const map = {
      'engine.cc': null,
      'engine.fuel': 'PETROL'
    };

    const response = engineBuilder.build(map);
    expect(response).to.be.null;
    done();
  });

});