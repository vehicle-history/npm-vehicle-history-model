var chai = require('chai');
var should = chai.should();
var deregistrationEvent = require('../../../../lib/model/response/event/deregistrationEvent');

describe('deregistrationEvent model test', function () {

  var type = {type: 'type'};
  var createdAt = 'iso date';
  var description = 'description';
  var note = 'note';

  it('should create model', function (done) {

    var model = new deregistrationEvent.DeregistrationEvent(
      type, createdAt, description, note
    );

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.note.should.be.equal(note);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new deregistrationEvent.DeregistrationEventBuilder()
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