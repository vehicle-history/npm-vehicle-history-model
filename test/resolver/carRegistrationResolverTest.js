var options = require('config');
var CarRegistrationResolver = require('../../lib/resolver/carRegistrationResolver').CarRegistrationResolver;
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var carRegistrationResolver = new CarRegistrationResolver();

describe('car registration resolver test', function () {

  it('should return valid registration', function (done) {

    var map = {
      'registration.status': 'registered',
      'registration.firstDate': '2007-08-08'
    };

    var response = carRegistrationResolver.resolve(map, options);

    should.exist(response);
    should.exist(response.status);
    response.status.should.equal('REGISTERED');
    response.firstAt.should.equal('2007-08-07T22:00:00.000Z');
    done();
  });

  it('should return null for empty date', function (done) {

    var map = {
      'registration.status': 'registered',
      'registration.firstDate': 'not-parsable-data'
    };

    var response = carRegistrationResolver.resolve(map, options);
    response.status.should.equal('REGISTERED');
    expect(response.firstAt).to.be.null();
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'registration.status': null,
      'registration.firstDate': null
    };

    var response = carRegistrationResolver.resolve(map, options);
    expect(response).to.be.null();
    done();
  });
});