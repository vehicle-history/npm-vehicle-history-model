const options = require('config');
const carMileageResolver = require('../../../lib/resolver/vehicle/carMileageResolver');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car mileage resolver test', () => {

  it('should return valid mileage value and mileage type', done => {

    const map = {
      'mileage.value': '13981',
      'mileage.type': 'mile'
    };

    carMileageResolver.resolve(map, options);

    should.exist(map['mileage.value']);
    map['mileage.value'].should.equal(13981);
    should.exist(map['mileage.type']);
    map['mileage.type'].should.equal('MILE');

    done();
  });

  it('should return null for all null values', done => {

    const map = {
      'mileage.value': null,
      'mileage.type': null
    };

    carMileageResolver.resolve(map, options);
    expect(map['mileage.value']).to.be.null;
    expect(map['mileage.type']).to.be.null;

    done();
  });

  it('should return object with some null values', done => {

    const map = {
      'mileage.value': '13981',
      'mileage.type': null
    };

    carMileageResolver.resolve(map, options);

    should.exist(map['mileage.value']);
    map['mileage.value'].should.equal(13981);
    should.exist(map['mileage.type']);
    map['mileage.type'].should.equal('KM');

    done();
  });

  it('should return default type for unknown value', done => {

    const map = {
      'mileage.value': 111,
      'mileage.type': 'unknown'
    };

    carMileageResolver.resolve(map, options);
    should.exist(map['mileage.value']);
    map['mileage.value'].should.equal(111);
    should.exist(map['mileage.type']);
    map['mileage.type'].should.equal('KM');

    done();
  });

  it('should return null object for null mileage value', done => {

    const map = {
      'mileage.value': null,
      'mileage.type': 'unknown'
    };

    carMileageResolver.resolve(map, options);
    expect(map['mileage.value']).to.be.null;
    expect(map['mileage.type']).to.be.null;

    done();
  });


  it('should resolve type from value', done => {

    const map = {
      'mileage.value': '13981 mile',
      'mileage.type': null
    };

    carMileageResolver.resolve(map, options);

    should.exist(map['mileage.value']);
    map['mileage.value'].should.equal(13981);
    should.exist(map['mileage.type']);
    map['mileage.type'].should.equal('MILE');

    done();
  });

});