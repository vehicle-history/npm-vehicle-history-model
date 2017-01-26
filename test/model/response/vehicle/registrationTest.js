const chai = require('chai');
const should = chai.should();
const registration = require('../../../../lib/model/response/vehicle/registration');

describe('registration model test', () => {

  const status = 'status';
  const firstAt = 'firstAt';

  it('should create model', done => {

    const registrationModel = new registration.Registration(
      status,
      firstAt
    );

    should.exist(registrationModel);
    registrationModel.status.should.be.equal(status);
    registrationModel.firstAt.should.be.equal(firstAt);
    done();
  });

  it('should create model by builder', done => {

    const registrationModel = new registration.RegistrationBuilder()
      .withStatus(status)
      .withFirstAt(firstAt)
      .build();

    should.exist(registrationModel);
    registrationModel.status.should.be.equal(status);
    registrationModel.firstAt.should.be.equal(firstAt);
    done();
  });

});
