const options = require('config');
const productionBuilder = require('../../../lib/builder/vehicle/productionBuilder');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car policy builder test', () => {

  it('should return valid production object', done => {

    const map = {
      'production.year': 2011
    };

    const response = productionBuilder.build(map);
    should.exist(response);
    response.year.should.equal(2011);
    done();

  });

  it('should return null for all null values', done => {

    const map = {
      'production.year': null
    };

    const response = productionBuilder.build(map);
    expect(response).to.be.null;
    done();

  });

});