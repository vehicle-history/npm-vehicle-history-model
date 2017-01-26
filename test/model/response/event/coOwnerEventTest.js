const chai = require('chai');
const should = chai.should();
const coOwnerEvent = require('../../../../lib/model/response/event/coOwnerEvent');

describe('coOwnerEvent model test', () => {

  const type = {type: 'type'};
  const createdAt = 'iso date';
  const description = 'description';
  const ownerType = 'PRIVATE';

  it('should create model', done => {

    const model = new coOwnerEvent.CoOwnerEvent(
      type, createdAt, description, ownerType
    );

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.ownerType.should.be.equal(ownerType);

    done();
  });

  it('should create model by builder', done => {

    const model = new coOwnerEvent.CoOwnerEventBuilder()
      .withType(type)
      .withCreatedAt(createdAt)
      .withDescription(description)
      .withOwnerType(ownerType)
      .build();

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.ownerType.should.be.equal(ownerType);

    done();
  });

});