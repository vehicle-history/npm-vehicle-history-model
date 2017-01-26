const chai = require('chai');
const should = chai.should();
const registrationEvent = require('../../../../lib/model/response/event/registrationEvent');

describe('registrationEvent model test', () => {

  const type = {type: 'type'};
  const createdAt = 'iso date';
  const description = 'description';
  const abroadRegistration = true;

  it('should create model', done => {

    const model = new registrationEvent.RegistrationEvent(
      type, createdAt, description, abroadRegistration
    );

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.abroadRegistration.should.be.equal(abroadRegistration);

    done();
  });

  it('should create model by builder', done => {

    const model = new registrationEvent.RegistrationEventBuilder()
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