const options = require('config');
const mileageBuilder = require('../../../lib/builder/vehicle/mileageBuilder');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car mileage builder test', () => {

  it('should build mileage model', done => {

    const map = {
      'mileage.value': 13981,
      'mileage.type': 'MILE'
    };

    const response = mileageBuilder.build(map);

    should.exist(response);
    should.exist(response.value);
    response.value.should.equal(13981);
    should.exist(response.type);
    response.type.should.equal('MILE');
    done();
  });

  it('should return null for all null values', done => {

    const map = {
      'mileage.value': null,
      'mileage.type': null
    };

    const response = mileageBuilder.build(map);
    expect(response).to.be.null;
    done();
  });

});