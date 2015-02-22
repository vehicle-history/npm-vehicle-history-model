var chai = require('chai');
var should = chai.should();
var registration = require('../../../../lib/model/response/vehicle/registration');

describe('registration model test', function () {

  var status = 'UNKNOWN';
  var firstAt = 'iso date';

  it('should create model', function (done) {

    var registrationModel = new registration.Registration(
      status,
      firstAt
    );

    should.exist(registrationModel);
    registrationModel.status.should.be.equal(status);
    registrationModel.firstAt.should.be.equal(firstAt);

    done();
  });

  it('should create model by builder', function (done) {

    var registrationModel = new registration.RegistrationBuilder()
      .withStatus(status)
      .withFirstAt(firstAt)
      .build();

    should.exist(registrationModel);
    registrationModel.status.should.be.equal(status);
    registrationModel.firstAt.should.be.equal(firstAt);

    done();
  });

});