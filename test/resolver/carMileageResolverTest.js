var options = require('config');
var CarMileageResolver = require('../../lib/resolver/carMileageResolver').CarMileageResolver;
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var carMileageResolver = new CarMileageResolver();

describe('car mileage resolver test', function () {

  it('should return valid mileage value and mileage type', function (done) {

    var map = {
      'mileage.value': '13981',
      'mileage.type': 'mile'
    };

    var response = carMileageResolver.buildResponse(map, options);

    should.exist(response);
    should.exist(response.value);
    response.value.should.equal(13981);
    should.exist(response.type);
    response.type.should.equal('MILE');
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'mileage.value': null,
      'mileage.type': null
    };

    var response = carMileageResolver.buildResponse(map, options);
    expect(response).to.be.null();
    done();
  });

  it('should return object with some null values', function (done) {

    var map = {
      'mileage.value': '13981',
      'mileage.type': null
    };

    var response = carMileageResolver.buildResponse(map, options);

    should.exist(response);
    should.exist(response.value);
    response.value.should.equal(13981);
    should.exist(response.type);
    response.type.should.equal('KM');
    done();
  });

  it('should return default type for unknown value', function (done) {

    var map = {
      'mileage.value': null,
      'mileage.type': 'unknown'
    };

    var response = carMileageResolver.buildResponse(map, options);
    should.exist(response);
    should.exist(response.type);
    expect(response.value).to.be.null();
    response.type.should.equal('KM');
    done();
  });

  it('should return null value for null mileage value', function (done) {

    var map = {
      'mileage.value': null,
      'mileage.type': 'unknown'
    };

    var response = carMileageResolver.buildResponse(map, options);
    should.exist(response);
    should.exist(response.type);
    expect(response.value).to.be.null();
    response.type.should.equal('KM');
    done();
  });

});