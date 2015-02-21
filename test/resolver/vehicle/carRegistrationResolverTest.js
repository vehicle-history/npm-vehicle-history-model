var options = require('config');
var carRegistrationResolver = require('../../../lib/resolver/vehicle/carRegistrationResolver');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car registration resolver test', function () {

  it('should return valid registration', function (done) {

    var map = {
      'registration.status': 'registered',
      'registration.firstDate': '2007-08-08'
    };

    carRegistrationResolver.resolve(map, options);

    should.exist(map['registration.status']);
    map['registration.status'].should.equal('REGISTERED');

    should.exist(map['registration.firstDate']);
//    map['registration.firstDate'].should.equal('2007-08-08T00:00:00.000Z');

    done();
  });

  it('should return null for empty date', function (done) {

    var map = {
      'registration.status': 'registered',
      'registration.firstDate': 'not-parsable-data'
    };

    carRegistrationResolver.resolve(map, options);

    should.exist(map['registration.status']);
    map['registration.status'].should.equal('REGISTERED');

    expect(map['registration.firstDate']).to.be.null;

    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'registration.status': null,
      'registration.firstDate': null
    };

    carRegistrationResolver.resolve(map, options);

    should.exist(map['registration.status']);
    map['registration.status'].should.equal('UNKNOWN');

    expect(map['registration.firstDate']).to.be.null;

    done();
  });
});