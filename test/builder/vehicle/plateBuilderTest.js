const options = require('config');
const plateBuilder = require('../../../lib/builder/vehicle/plateBuilder');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car plate builder test', () => {

  it('should return plate', done => {

    const map = {
      'plate.value': 'PAA 1111',
      'plate.country': 'PL'
    };

    const response = plateBuilder.build(map);
    response.value.should.equal('PAA 1111');
    response.country.should.equal('PL');

    done();
  });

  it('should return null for empty value', done => {

    const map = {
      'plate.value': '',
      'plate.country': ''
    };

    const response = plateBuilder.build(map);
    expect(response).to.be.null;

    done();
  });


  it('should return null for UNKNOWN country and null value', done => {

    const map = {
      'plate.value': null,
      'plate.country': 'UNKNOWN'
    };

    const response = plateBuilder.build(map);
    expect(response).to.be.null;

    done();

  });

  it('should return UNKNOWN country for unknown value', done => {

    const map = {
      'plate.value': 'PAA 1111',
      'plate.country': 'UNKNOWN'
    };

    const response = plateBuilder.build(map);
    response.value.should.equal('PAA 1111');
    response.country.should.equal('UNKNOWN');

    done();

  });

});