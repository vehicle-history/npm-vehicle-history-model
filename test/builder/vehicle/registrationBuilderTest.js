var options = require('config');
var registrationBuilder = require('../../../lib/builder/vehicle/registrationBuilder');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car policy builder test', function () {

  it('should return valid registration', function (done) {

    var map = {
      'registration.status': 'REGISTERED',
      'registration.firstDate': '2007-08-08T00:00:00.000Z'
    };

    var response = registrationBuilder.build(map);

    should.exist(response);

    should.exist(response.status);
    response.status.should.equal('REGISTERED');

    should.exist(response.firstAt);
    response.firstAt.should.equal('2007-08-08T00:00:00.000Z');

    done();
  });

  it('should return null for empty date', function (done) {

    var map = {
      'registration.status': 'REGISTERED',
      'registration.firstDate': null
    };

    var response = registrationBuilder.build(map);

    should.exist(response.status);
    response.status.should.equal('REGISTERED');

    expect(response.firstAt).to.be.null;

    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'registration.status': null,
      'registration.firstDate': null
    };

    var response = registrationBuilder.build(map);
    expect(response).to.be.null;

    done();
  });

  it('should return null for UNKNOWN status and null firstDate', function (done) {

    var map = {
      'registration.status': 'UNKNOWN',
      'registration.firstDate': null
    };

    var response = registrationBuilder.build(map);
    expect(response).to.be.null;

    done();
  });

});