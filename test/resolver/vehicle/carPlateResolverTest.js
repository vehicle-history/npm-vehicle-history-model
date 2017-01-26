const options = require('config');
const carPlateResolver = require('../../../lib/resolver/vehicle/carPlateResolver');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car plate resolver test', () => {

  it('should return plate', done => {

    const map = {
      'plate.value': 'PAA 1111',
      'plate.country': 'pl'
    };

    carPlateResolver.resolve(map, options);

    should.exist(map['plate.value']);
    map['plate.value'].should.equal('PAA 1111');
    should.exist(map['plate.country']);
    map['plate.country'].should.equal('PL');

    done();
  });

  it('should return UNKNOWN country for null values', done => {

    const map = {
      'plate.value': null,
      'plate.country': null
    };

    carPlateResolver.resolve(map, options);

    expect(map['plate.value']).to.be.null;
    should.exist(map['plate.country']);
    map['plate.country'].should.equal('UNKNOWN');
    done();
  });

  it('should return UNKNOWN country for unknown value and null plate', done => {

    const map = {
      'plate.value': null,
      'plate.country': 'unknown'
    };

    carPlateResolver.resolve(map, options);

    expect(map['plate.value']).to.be.null;
    should.exist(map['plate.country']);
    map['plate.country'].should.equal('UNKNOWN');
    done();
  });


  it('should return UNKNOWN country for unknown value', done => {

    const map = {
      'plate.value': 'PAA 1111',
      'plate.country': 'unknown-value'
    };

    carPlateResolver.resolve(map, options);

    should.exist(map['plate.value']);
    map['plate.value'].should.equal('PAA 1111');
    should.exist(map['plate.country']);
    map['plate.country'].should.equal('UNKNOWN');
    done();

  });
});