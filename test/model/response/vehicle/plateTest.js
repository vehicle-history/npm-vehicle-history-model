var chai = require('chai');
var should = chai.should();
var plate = require('../../../../lib/model/response/vehicle/plate');

describe('plate model test', function () {

  it('should create model', function (done) {

    var plateModel = new plate.Plate('ABC12345', 'PL');
    should.exist(plateModel);
    plateModel.value.should.be.equal('ABC12345');
    plateModel.country.should.be.equal('PL');

    done();
  });

  it('should create model by builder', function (done) {

    var plateModel = new plate.PlateBuilder()
      .withValue('ABC12345')
      .withCountry('PL')
      .build();

    should.exist(plateModel);
    plateModel.value.should.be.equal('ABC12345');
    plateModel.country.should.be.equal('PL');

    done();
  });

});