var options = require('config');
var CarPolicyResolver = require('../../lib/resolver/carPolicyResolver').CarPolicyResolver;
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var carPolicyResolver = new CarPolicyResolver();

describe('car policy resolver test', function () {

  it('should return valid policy', function (done) {

    var map = {
      'policy.status': 'aktualna'
    };

    var response = carPolicyResolver.buildResponse(map, options);

    should.exist(response);
    should.exist(response.status);
    response.status.should.equal('UPTODATE');
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'policy.status': null
    };

    var response = carPolicyResolver.buildResponse(map, options);
    expect(response).to.be.null();
    done();
  });

});