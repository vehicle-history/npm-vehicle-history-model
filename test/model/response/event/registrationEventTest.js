var chai = require('chai');
var should = chai.should();
var registrationEvent = require('../../../../lib/model/response/event/registrationEvent');

describe('registrationEvent model test', function () {

  var type = {type: 'type'};
  var createdAt = 'iso date';
  var description = 'description';
  var abroadRegistration = true;

  it('should create model', function (done) {

    var model = new registrationEvent.RegistrationEvent(
      type, createdAt, description, abroadRegistration
    );

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.abroadRegistration.should.be.equal(abroadRegistration);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new registrationEvent.RegistrationEventBuilder()
      .withType(type)
      .withCreatedAt(createdAt)
      .withDescription(description)
      .withAbroadRegistration(abroadRegistration)
      .build();

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.abroadRegistration.should.be.equal(abroadRegistration);

    done();
  });

});