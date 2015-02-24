var chai = require('chai');
var should = chai.should();
var changedRegistrationLocationEvent = require('../../../../lib/model/response/event/changedRegistrationLocationEvent');

describe('changedRegistrationLocationEvent model test', function () {

  var type = {type: 'type'};
  var createdAt = 'iso date';
  var description = 'description';
  var location = {location: 'location'};

  it('should create model', function (done) {

    var model = new changedRegistrationLocationEvent.ChangedRegistrationLocationEvent(
      type, createdAt, description, location
    );

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);
    model.location.should.be.equal(location);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new changedRegistrationLocationEvent.ChangedRegistrationLocationEventBuilder()
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