const options = require('config');
const policyBuilder = require('../../../lib/builder/vehicle/policyBuilder');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car policy builder test', () => {

  it('should return valid policy', done => {

    const map = {
      'policy.status': 'UPTODATE'
    };

    const response = policyBuilder.build(map);

    should.exist(response);
    should.exist(response.status);
    response.status.should.equal('UPTODATE');
    done();
  });

  it('should return null for all null values', done => {

    const map = {
      'policy.status': null
    };

    const response = policyBuilder.build(map);
    expect(response).to.be.null;
    done();
  });


});