const chai = require('chai');
const should = chai.should();
const deregistrationEvent = require('../../../../lib/model/response/event/deregistrationEvent');

describe('deregistrationEvent model test', () => {

  const type = {type: 'type'};
  const createdAt = 'iso date';
  const description = 'description';
  const note = 'note';

  it('should create model', done => {

    const model = new deregistrationEvent.DeregistrationEvent(
      type, createdAt, description, note
    );

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.note.should.be.equal(note);

    done();
  });

  it('should create model by builder', done => {

    const model = new deregistrationEvent.DeregistrationEventBuilder()
      .withType(type)
      .withCreatedAt(createdAt)
      .withDescription(description)
      .withNote(note)
      .build();

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.note.should.be.equal(note);

    done();
  });

});