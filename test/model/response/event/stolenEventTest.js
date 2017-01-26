const chai = require('chai');
const should = chai.should();
const stolenEvent = require('../../../../lib/model/response/event/stolenEvent');

describe('stolenEvent model test', () => {

  const type = {type: 'type'};
  const createdAt = 'iso date';
  const description = 'description';

  it('should create model', done => {

    const model = new stolenEvent.StolenEvent(
      type, createdAt, description
    );

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);

    done();
  });

  it('should create model by builder', done => {

    const model = new stolenEvent.StolenEventBuilder()
      .withType(type)
      .withCreatedAt(createdAt)
      .withDescription(description)
      .build();

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);

    done();
  });

});