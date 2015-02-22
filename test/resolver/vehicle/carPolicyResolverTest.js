var options = require('config');
var carPolicyResolver = require('../../../lib/resolver/vehicle/carPolicyResolver');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car policy resolver test', function () {

  it('should return valid policy', function (done) {

    var map = {
      'policy.status': 'actual'
    };

    carPolicyResolver.resolve(map, options);

    should.exist(map['policy.status']);
    map['policy.status'].should.equal('UPTODATE');
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'policy.status': null
    };

    carPolicyResolver.resolve(map, options);
    should.exist(map['policy.status']);
    map['policy.status'].should.equal('UNKNOWN');
    done();
  });

});