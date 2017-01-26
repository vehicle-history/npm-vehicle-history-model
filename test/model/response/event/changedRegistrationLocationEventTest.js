const chai = require('chai');
const should = chai.should();
const changedRegistrationLocationEvent = require('../../../../lib/model/response/event/changedRegistrationLocationEvent');

describe('changedRegistrationLocationEvent model test', () => {

  const type = {type: 'type'};
  const createdAt = 'iso date';
  const description = 'description';
  const location = {location: 'location'};

  it('should create model', done => {

    const model = new changedRegistrationLocationEvent.ChangedRegistrationLocationEvent(
      type, createdAt, description, location
    );

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.location.should.be.equal(location);

    done();
  });

  it('should create model by builder', done => {

    const model = new changedRegistrationLocationEvent.ChangedRegistrationLocationEventBuilder()
      .withType(type)
      .withCreatedAt(createdAt)
      .withDescription(description)
      .withLocation(location)
      .build();

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.location.should.be.equal(location);

    done();
  });

});