var CarStoleResolver = require('../../lib/resolver/carStoleResolver').CarStoleResolver;
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var carStoleResolver = new CarStoleResolver();

describe('car stolen status resolver test', function () {

  it('should be stolen status', function (done) {

    var map = {
      'status.stolen': 'skradziony'
    };

    var response = carStoleResolver.resolve(map);
    expect(response).to.be.true();
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'status.stolen': null
    };

    var response = carStoleResolver.resolve(map);
    expect(response).to.be.false();
    done();
  });

});