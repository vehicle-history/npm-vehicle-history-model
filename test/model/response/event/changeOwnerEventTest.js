var chai = require('chai');
var should = chai.should();
var changeOwnerEvent = require('../../../../lib/model/response/event/changeOwnerEvent');

describe('changeOwnerEvent model test', function () {

  var type = {type: 'type'};
  var createdAt = 'iso date';
  var description = 'description';
  var firstOwner = true;
  var ownerType = 'PRIVATE';
  var location = {location: 'location'};

  it('should create model', function (done) {

    var model = new changeOwnerEvent.ChangeOwnerEvent(
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

  it('should create model by builder', function (done) {

    var model = new changeOwnerEvent.ChangeOwnerEventBuilder()
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