const options = require('config');
const variantBuilder = require('../../../lib/builder/vehicle/variantBuilder');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car variant builder test', () => {

  it('should return valid type and kind', done => {

    const map = {
      'variant.type': 'CAR',
      'variant.kind': 'HATCHBACK'
    };

    const response = variantBuilder.build(map);

    should.exist(response);
    should.exist(response.type);
    response.type.should.equal('CAR');
    should.exist(response.kind);
    response.kind.should.equal('HATCHBACK');
    done();
  });


  it('should return default typ for unknown value', done => {

    const map = {
      'variant.type': 'UNKNOWN',
      'variant.kind': 'HATCHBACK'
    };

    const response = variantBuilder.build(map);

    should.exist(response);
    should.exist(response.type);
    response.type.should.equal('UNKNOWN');
    should.exist(response.kind);
    response.kind.should.equal('HATCHBACK');
    done();
  });

  it('should return object with some null values', done => {

    const map = {
      'variant.type': 'CAR',
      'variant.kind': 'UNKNOWN'
    };

    const response = variantBuilder.build(map);
    should.exist(response);
    should.exist(response.type);
    response.type.should.equal('CAR');
    should.exist(response.kind);
    response.kind.should.equal('UNKNOWN');
    done();
  });

  it('should return null type for unknown values', done => {

    const map = {
      'variant.type': 'UNKNOWN',
      'variant.kind': 'UNKNOWN'
    };

    const response = variantBuilder.build(map);
    expect(response).to.be.null;
    done();
  });


});