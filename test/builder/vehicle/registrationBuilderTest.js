const options = require('config');
const registrationBuilder = require('../../../lib/builder/vehicle/registrationBuilder');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car policy builder test', () => {

  it('should return valid registration', done => {

    const map = {
      'registration.status': 'REGISTERED',
      'registration.firstDate': '2007-08-08T00:00:00.000Z'
    };

    const response = registrationBuilder.build(map);

    should.exist(response);

    should.exist(response.status);
    response.status.should.equal('REGISTERED');

    should.exist(response.firstAt);
    response.firstAt.should.equal('2007-08-08T00:00:00.000Z');

    done();
  });

  it('should return null for empty date', done => {

    const map = {
      'registration.status': 'REGISTERED',
      'registration.firstDate': null
    };

    const response = registrationBuilder.build(map);

    should.exist(response.status);
    response.status.should.equal('REGISTERED');

    expect(response.firstAt).to.be.null;

    done();
  });

  it('should return null for all null values', done => {

    const map = {
      'registration.status': null,
      'registration.firstDate': null
    };

    const response = registrationBuilder.build(map);
    expect(response).to.be.null;

    done();
  });

  it('should return null for UNKNOWN status and null firstDate', done => {

    const map = {
      'registration.status': 'UNKNOWN',
      'registration.firstDate': null
    };

    const response = registrationBuilder.build(map);
    expect(response).to.be.null;

    done();
  });

});