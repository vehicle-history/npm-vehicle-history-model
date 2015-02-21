var chai = require('chai');
var should = chai.should();
var productionEvent = require('../../../../lib/model/response/event/productionEvent');

describe('productionEvent model test', function () {

  var type = {type: 'type'};
  var createdAt = 'iso date';
  var description = 'description';

  it('should create model', function (done) {

    var model = new productionEvent.ProductionEvent(
      type, createdAt, description
    );

    should.exist(model);
    model.type.should.be.equal(type);
    model.createdAt.should.be.equal(createdAt);
    model.description.should.be.equal(description);

    done();
  });

  it('should create model by builder', function (done) {

    var model = new productionEvent.ProductionEventBuilder()
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