const options = require('config');
const vinBuilder = require('../../../lib/builder/vehicle/vinBuilder');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car vin builder test', () => {

  it('should return vin', done => {

    const map = {
      'vin.value': 'number'
    };

    const response = vinBuilder.build(map);

    response.should.equal('number');

    done();
  });

  it('should return null', done => {

    const map = {
      'vin.value': null
    };

    const response = vinBuilder.build(map);
    expect(response).to.be.null;
    done();
  });

});