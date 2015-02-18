var options = require('config');
var CarPlateResolver = require('../../lib/resolver/carPlateResolver').CarPlateResolver;
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var carPlateResolver = new CarPlateResolver();

describe('car plate resolver test', function () {

  it('should return plate', function (done) {

    var map = {
      'plate.value': 'PAA 1111',
      'plate.country': 'pl'
    };

    var response = carPlateResolver.resolve(map, options);
    response.value.should.equal('PAA 1111');
    response.country.should.equal('PL');
    done();
  });

  it('should return null for empty value', function (done) {

    var map = {
      'plate.value': '',
      'plate.country': ''
    };

    var response = carPlateResolver.resolve(map, options);
    expect(response).to.be.null;
    done();
  });


  it('should return UNKNOWN country for unknown value', function (done) {

    var map = {
      'plate.value': 'PAA 1111',
      'plate.country': 'unknown-value'
    };

    var response = carPlateResolver.resolve(map, options);
    response.value.should.equal('PAA 1111');
    response.country.should.equal('UNKNOWN');
    done();

  });
});