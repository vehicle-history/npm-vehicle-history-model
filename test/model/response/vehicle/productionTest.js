const chai = require('chai');
const should = chai.should();
const production = require('../../../../lib/model/response/vehicle/production');

describe('production model test', () => {

  const year = 'year';

  it('should create model', done => {

    const productionModel = new production.Production(
      year
    );

    should.exist(productionModel);
    productionModel.year.should.be.equal(year);
    done();
  });

  it('should create model by builder', done => {

    const productionModel = new production.ProductionBuilder()
      .withYear(year)
      .build();

    should.exist(productionModel);
    productionModel.year.should.be.equal(year);
    done();
  });

});
