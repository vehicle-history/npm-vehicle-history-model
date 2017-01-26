const chai = require('chai');
const should = chai.should();
const searchCarRequest = require('../../lib/model/searchCarRequest');

describe('searchCarRequest model test', () => {

  const plate = 'AAS 12345';
  const vin = 'vinvinvin';
  const firstRegistrationDate = '12.01.1988';
  const country = 'PL';

  it('should create model', done => {

    const model = new searchCarRequest.SearchCarRequest(
      plate,
      vin,
      firstRegistrationDate,
      country
    );

    should.exist(model);
    model.plate.should.be.equal(plate);
    model.vin.should.be.equal(vin);
    model.firstRegistrationDate.should.be.equal(firstRegistrationDate);
    model.country.should.be.equal(country);

    done();
  });

  it('should create model by builder', done => {

    const model = new searchCarRequest.SearchCarRequestBuilder()
      .withPlate(plate)
      .withVin(vin)
      .withFirstRegistrationDate(firstRegistrationDate)
      .withCountry(country)
      .build();

    should.exist(model);
    model.plate.should.be.equal(plate);
    model.vin.should.be.equal(vin);
    model.firstRegistrationDate.should.be.equal(firstRegistrationDate);
    model.country.should.be.equal(country);

    done();
  });

});