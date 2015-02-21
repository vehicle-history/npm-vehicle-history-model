var options = require('config');
var vinBuilder = require('../../../lib/builder/vehicle/vinBuilder');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car vin builder test', function () {

  it('should return vin', function (done) {

    var map = {
      'vin.value': 'number'
    };

    var response = vinBuilder.build(map);

    response.should.equal('number');

    done();
  });

  it('should return null', function (done) {

    var map = {
      'vin.value': null
    };

    var response = vinBuilder.build(map);
    expect(response).to.be.null;
    done();
  });

});