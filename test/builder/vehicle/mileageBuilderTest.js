var options = require('config');
var mileageBuilder = require('../../../lib/builder/vehicle/mileageBuilder');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car mileage builder test', function () {

  it('should build mileage model', function (done) {

    var map = {
      'mileage.value': 13981,
      'mileage.type': 'MILE'
    };

    var response = mileageBuilder.build(map);

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

    var response = mileageBuilder.build(map);
    expect(response).to.be.null;
    done();
  });

});