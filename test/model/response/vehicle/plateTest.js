const chai = require('chai');
const should = chai.should();
const plate = require('../../../../lib/model/response/vehicle/plate');

describe('plate model test', () => {

  const value = 'value';
  const country = 'country';

  it('should create model', done => {

    const plateModel = new plate.Plate(
      value,
      country
    );

    should.exist(plateModel);
    plateModel.value.should.be.equal(value);
    plateModel.country.should.be.equal(country);
    done();
  });

  it('should create model by builder', done => {

    const plateModel = new plate.PlateBuilder()
      .withValue(value)
      .withCountry(country)
      .build();

    should.exist(plateModel);
    plateModel.value.should.be.equal(value);
    plateModel.country.should.be.equal(country);
    done();
  });

});
