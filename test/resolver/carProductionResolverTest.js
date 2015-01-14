var CarProductionResolver = require('../../lib/resolver/carProductionResolver').CarProductionResolver;
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var carProductionResolver = new CarProductionResolver();

describe('car production resolver test', function () {

  it('should return valid production object', function (done) {

    var map = {
      'production.year': '2011'
    };

    var response = carProductionResolver.resolve(map);
    should.exist(response);
    response.year.should.equal(2011);
    done();

  });

  it('should return null for all null values', function (done) {

    var map = {
      'production.year': null
    };

    var response = carProductionResolver.resolve(map);
    expect(response).to.be.null();
    done();

  });

});