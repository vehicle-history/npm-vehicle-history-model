var options = require('config');
var policyBuilder = require('../../../lib/builder/vehicle/policyBuilder');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car policy builder test', function () {

  it('should return valid policy', function (done) {

    var map = {
      'policy.status': 'UPTODATE'
    };

    var response = policyBuilder.build(map);

    should.exist(response);
    should.exist(response.status);
    response.status.should.equal('UPTODATE');
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'policy.status': null
    };

    var response = policyBuilder.build(map);
    expect(response).to.be.null;
    done();
  });


});