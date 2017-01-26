const chai = require('chai');
const should = chai.should();
const inspectionEvent = require('../../../../lib/model/response/event/inspectionEvent');

describe('inspectionEvent model test', () => {

  const type = {type: 'type'};
  const createdAt = 'iso date';
  const description = 'description';
  const expireAt = 'iso date 2';
  const mileage = {mileage: 'mileage'};

  it('should create model', done => {

    const model = new inspectionEvent.InspectionEvent(
      type, createdAt, description, expireAt, mileage
    );

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.expireAt.should.be.equal(expireAt);
    model.mileage.should.be.equal(mileage);

    done();
  });

  it('should create model by builder', done => {

    const model = new inspectionEvent.InspectionEventBuilder()
      .withType(type)
      .withCreatedAt(createdAt)
      .withDescription(description)
      .withExpireAt(expireAt)
      .withMileage(mileage)
      .build();

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.expireAt.should.be.equal(expireAt);
    model.mileage.should.be.equal(mileage);

    done();
  });

});