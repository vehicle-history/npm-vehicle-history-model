var options = require('config');
var CarRegistrationResolver = require('../../lib/resolver/carRegistrationResolver').CarRegistrationResolver;
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var carRegistrationResolver = new CarRegistrationResolver();

describe('car registration resolver test', function () {

  it('should return valid registration', function (done) {

    var map = {
      'registration.status': 'zarejestrowany'
    };

    var response = carRegistrationResolver.resolve(map, options);

    should.exist(response);
    should.exist(response.status);
    response.status.should.equal('REGISTERED');
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'registration.status': null
    };

    var response = carRegistrationResolver.resolve(map, options);
    expect(response).to.be.null();
    done();
  });

});