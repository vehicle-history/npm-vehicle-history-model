const chai = require('chai');
const should = chai.should();
const location = require('../../../../lib/model/response/vehicle/location');

describe('location model test', () => {

  const country = 'country';
  const state = 'state';

  it('should create model', done => {

    const locationModel = new location.Location(
      country,
      state
    );

    should.exist(locationModel);
    locationModel.country.should.be.equal(country);
    locationModel.state.should.be.equal(state);
    done();
  });

  it('should create model by builder', done => {

    const locationModel = new location.LocationBuilder()
      .withCountry(country)
      .withState(state)
      .build();

    should.exist(locationModel);
    locationModel.country.should.be.equal(country);
    locationModel.state.should.be.equal(state);
    done();
  });

});
