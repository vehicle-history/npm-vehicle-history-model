var chai = require('chai');
var should = chai.should();
var mileage = require('../../../../lib/model/response/vehicle/mileage');

describe('mileage model test', function () {

  var value = 1234;
  var type = 'KM';

  it('should create model', function (done) {

    var mileageModel = new mileage.Mileage(
      value,
      type
    );

    should.exist(mileageModel);
    mileageModel.value.should.be.equal(value);
    mileageModel.type.should.be.equal(type);

    done();
  });

  it('should create model by builder', function (done) {

    var mileageModel = new mileage.MileageBuilder()
      .withValue(value)
      .withType(type)
      .build();

    should.exist(mileageModel);
    mileageModel.value.should.be.equal(value);
    mileageModel.type.should.be.equal(type);

    done();
  });

});