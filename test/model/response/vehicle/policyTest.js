const chai = require('chai');
const should = chai.should();
const policy = require('../../../../lib/model/response/vehicle/policy');

describe('policy model test', () => {

  const status = 'status';

  it('should create model', done => {

    const policyModel = new policy.Policy(
      status
    );

    should.exist(policyModel);
    policyModel.status.should.be.equal(status);
    done();
  });

  it('should create model by builder', done => {

    const policyModel = new policy.PolicyBuilder()
      .withStatus(status)
      .build();

    should.exist(policyModel);
    policyModel.status.should.be.equal(status);
    done();
  });

});
