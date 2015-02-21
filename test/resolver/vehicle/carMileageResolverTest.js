var options = require('config');
var carMileageResolver = require('../../../lib/resolver/vehicle/carMileageResolver');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car mileage resolver test', function () {

  it('should return valid mileage value and mileage type', function (done) {

    var map = {
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

  it('should return null for all null values', function (done) {

    var map = {
      'mileage.value': null,
      'mileage.type': null
    };

    carMileageResolver.resolve(map, options);
    expect(map['mileage.value']).to.be.null;
    expect(map['mileage.type']).to.be.null;

    done();
  });

  it('should return object with some null values', function (done) {

    var map = {
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

  it('should return default type for unknown value', function (done) {

    var map = {
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

  it('should return null object for null mileage value', function (done) {

    var map = {
      'mileage.value': null,
      'mileage.type': 'unknown'
    };

    carMileageResolver.resolve(map, options);
    expect(map['mileage.value']).to.be.null;
    expect(map['mileage.type']).to.be.null;

    done();
  });


  it('should resolve type from value', function (done) {

    var map = {
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