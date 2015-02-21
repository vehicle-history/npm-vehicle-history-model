var chai = require('chai');
var should = chai.should();
var inspectionEvent = require('../../../../lib/model/response/event/inspectionEvent');

describe('inspectionEvent model test', function () {

  var type = {type: 'type'};
  var createdAt = 'iso date';
  var description = 'description';
  var expireAt = 'iso date 2';
  var mileage = {mileage: 'mileage'};

  it('should create model', function (done) {

    var model = new inspectionEvent.InspectionEvent(
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

  it('should create model by builder', function (done) {

    var model = new inspectionEvent.InspectionEventBuilder()
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