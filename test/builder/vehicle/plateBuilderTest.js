var options = require('config');
var plateBuilder = require('../../../lib/builder/vehicle/plateBuilder');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car plate builder test', function () {

  it('should return plate', function (done) {

    var map = {
      'plate.value': 'PAA 1111',
      'plate.country': 'PL'
    };

    var response = plateBuilder.build(map);
    response.value.should.equal('PAA 1111');
    response.country.should.equal('PL');

    done();
  });

  it('should return null for empty value', function (done) {

    var map = {
      'plate.value': '',
      'plate.country': ''
    };

    var response = plateBuilder.build(map);
    expect(response).to.be.null;

    done();
  });


  it('should return null for UNKNOWN country and null value', function (done) {

    var map = {
      'plate.value': null,
      'plate.country': 'UNKNOWN'
    };

    var response = plateBuilder.build(map);
    expect(response).to.be.null;

    done();

  });

  it('should return UNKNOWN country for unknown value', function (done) {

    var map = {
      'plate.value': 'PAA 1111',
      'plate.country': 'UNKNOWN'
    };

    var response = plateBuilder.build(map);
    response.value.should.equal('PAA 1111');
    response.country.should.equal('UNKNOWN');

    done();

  });

});