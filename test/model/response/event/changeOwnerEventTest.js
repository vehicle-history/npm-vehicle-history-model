const chai = require('chai');
const should = chai.should();
const changeOwnerEvent = require('../../../../lib/model/response/event/changeOwnerEvent');

describe('changeOwnerEvent model test', () => {

  const type = {type: 'type'};
  const createdAt = 'iso date';
  const description = 'description';
  const firstOwner = true;
  const ownerType = 'PRIVATE';
  const location = {location: 'location'};

  it('should create model', done => {

    const model = new changeOwnerEvent.ChangeOwnerEvent(
      type, createdAt, description, firstOwner, ownerType, location
    );

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.firstOwner.should.be.equal(firstOwner);
    model.ownerType.should.be.equal(ownerType);
    model.location.should.be.equal(location);

    done();
  });

  it('should create model by builder', done => {

    const model = new changeOwnerEvent.ChangeOwnerEventBuilder()
      .withType(type)
      .withCreatedAt(createdAt)
      .withDescription(description)
      .withFirstOwner(firstOwner)
      .withOwnerType(ownerType)
      .withLocation(location)
      .build();

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.firstOwner.should.be.equal(firstOwner);
    model.ownerType.should.be.equal(ownerType);
    model.location.should.be.equal(location);

    done();
  });

});