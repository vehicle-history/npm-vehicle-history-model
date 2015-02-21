var options = require('config');
var productionBuilder = require('../../../lib/builder/vehicle/productionBuilder');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car policy builder test', function () {

  it('should return valid production object', function (done) {

    var map = {
      'production.year': 2011
    };

    var response = productionBuilder.build(map);
    should.exist(response);
    response.year.should.equal(2011);
    done();

  });

  it('should return null for all null values', function (done) {

    var map = {
      'production.year': null
    };

    var response = productionBuilder.build(map);
    expect(response).to.be.null;
    done();

  });

});