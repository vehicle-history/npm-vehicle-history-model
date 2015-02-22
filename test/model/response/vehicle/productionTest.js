var chai = require('chai');
var should = chai.should();
var production = require('../../../../lib/model/response/vehicle/production');

describe('production model test', function () {

  var year = 1982;

  it('should create model', function (done) {

    var productionModel = new production.Production(
      year
    );

    should.exist(productionModel);
    productionModel.year.should.be.equal(year);

    done();
  });

  it('should create model by builder', function (done) {

    var productionModel = new production.ProductionBuilder()
      .withYear(year)
      .build();

    should.exist(productionModel);
    productionModel.year.should.be.equal(year);

    done();
  });

});