var options = require('config');
var CarEngineResolver = require('../../lib/resolver/carEngineResolver').CarEngineResolver;
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var carEngineResolver = new CarEngineResolver();

describe('car engine resolver test', function () {

  it('should return valid cc and fuel type', function (done) {

    var map = {
      'engine.cc': '1398',
      'engine.fuel': 'benzyna'
    };

    var response = carEngineResolver.buildResponse(map, options);

    should.exist(response);
    should.exist(response.cubicCapacity);
    response.cubicCapacity.should.equal(1398);
    should.exist(response.fuel);
    response.fuel.should.equal('PETROL');
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'engine.cc': null,
      'engine.fuel': null
    };

    var response = carEngineResolver.buildResponse(map, options);
    expect(response).to.be.null();
    done();
  });

  it('should return object with some null values', function (done) {

    var map = {
      'engine.cc': 1398,
      'engine.fuel': null
    };

    var response = carEngineResolver.buildResponse(map, options);
    should.exist(response);
    should.exist(response.cubicCapacity);
    response.cubicCapacity.should.equal(1398);
    should.exist(response.fuel);
    response.fuel.should.equal('OTHER');
    done();
  });

  it('should return default fuel type for unknown value', function (done) {

    var map = {
      'engine.cc': null,
      'engine.fuel': 'unknown'
    };

    var response = carEngineResolver.buildResponse(map, options);
    should.exist(response);
    should.exist(response.fuel);
    expect(response.cubicCapacity).to.be.null();
    response.fuel.should.equal('OTHER');
    done();
  });

});