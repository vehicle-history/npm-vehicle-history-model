const chai = require('chai');
const should = chai.should();
const mileage = require('../../../../lib/model/response/vehicle/mileage');

describe('mileage model test', () => {

  const value = 'value';
  const type = 'type';

  it('should create model', done => {

    const mileageModel = new mileage.Mileage(
      value,
      type
    );

    should.exist(mileageModel);
    mileageModel.value.should.be.equal(value);
    mileageModel.type.should.be.equal(type);
    done();
  });

  it('should create model by builder', done => {

    const mileageModel = new mileage.MileageBuilder()
      .withValue(value)
      .withType(type)
      .build();

    should.exist(mileageModel);
    mileageModel.value.should.be.equal(value);
    mileageModel.type.should.be.equal(type);
    done();
  });

});
