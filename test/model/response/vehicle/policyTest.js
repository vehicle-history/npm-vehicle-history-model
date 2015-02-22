var chai = require('chai');
var should = chai.should();
var policy = require('../../../../lib/model/response/vehicle/policy');

describe('policy model test', function () {

  var status = 'UNKNOWN';

  it('should create model', function (done) {

    var policyModel = new policy.Policy(
      status
    );

    should.exist(policyModel);
    policyModel.status.should.be.equal(status);

    done();
  });

  it('should create model by builder', function (done) {

    var policyModel = new policy.PolicyBuilder()
      .withStatus(status)
      .build();

    should.exist(policyModel);
    policyModel.status.should.be.equal(status);

    done();
  });

});