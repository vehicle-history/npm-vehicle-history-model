const options = require('config');
const carRegistrationResolver = require('../../../lib/resolver/vehicle/carRegistrationResolver');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car registration resolver test', () => {

  it('should return valid registration', done => {

    const map = {
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

  it('should return null for empty date', done => {

    const map = {
      'registration.status': 'registered',
      'registration.firstDate': 'not-parsable-data'
    };

    carRegistrationResolver.resolve(map, options);

    should.exist(map['registration.status']);
    map['registration.status'].should.equal('REGISTERED');

    expect(map['registration.firstDate']).to.be.null;

    done();
  });

  it('should return null for all null values', done => {

    const map = {
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