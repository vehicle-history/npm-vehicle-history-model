var chai = require('chai');
var should = chai.should();
var searchCarRequest = require('../../lib/model/searchCarRequest');

describe('searchCarRequest model test', function () {

  var plate = 'AAS 12345';
  var vin = 'vinvinvin';
  var firstRegistrationDate = '12.01.1988';
  var country = 'PL';

  it('should create model', function (done) {

    var model = new searchCarRequest.SearchCarRequest(
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

  it('should create model by builder', function (done) {

    var model = new searchCarRequest.SearchCarRequestBuilder()
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