var options = require('config');
var engineBuilder = require('../../../lib/builder/vehicle/engineBuilder');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car engine builder test', function () {

  it('should return valid cc and fuel type', function (done) {

    var map = {
      'engine.cc': 1398,
      'engine.fuel': 'PETROL'
    };

    var response = engineBuilder.build(map);

    should.exist(response);
    should.exist(response.cubicCapacity);
    response.cubicCapacity.should.equal(1398);
    should.exist(response.fuel);
    response.fuel.should.equal('PETROL');
    done();
  });

  it('should return null for missing cc', function (done) {

    var map = {
      'engine.cc': null,
      'engine.fuel': 'PETROL'
    };

    var response = engineBuilder.build(map);
    expect(response).to.be.null;
    done();
  });

});