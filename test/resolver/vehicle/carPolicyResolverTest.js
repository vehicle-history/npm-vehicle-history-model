const options = require('config');
const carPolicyResolver = require('../../../lib/resolver/vehicle/carPolicyResolver');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car policy resolver test', () => {

  it('should return valid policy', done => {

    const map = {
      'policy.status': 'actual'
    };

    carPolicyResolver.resolve(map, options);

    should.exist(map['policy.status']);
    map['policy.status'].should.equal('UPTODATE');
    done();
  });

  it('should return null for all null values', done => {

    const map = {
      'policy.status': null
    };

    carPolicyResolver.resolve(map, options);
    should.exist(map['policy.status']);
    map['policy.status'].should.equal('UNKNOWN');
    done();
  });

});