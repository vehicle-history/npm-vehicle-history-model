var carProductionResolver = require('../../../lib/resolver/vehicle/carProductionResolver');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car production resolver test', function () {

  it('should return valid production object', function (done) {

    var map = {
      'production.year': '2011'
    };

    carProductionResolver.resolve(map);

    should.exist(map['production.year']);
    map['production.year'].should.equal(2011);

    done();

  });

  it('should return null for all null values', function (done) {

    var map = {
      'production.year': null
    };

    carProductionResolver.resolve(map);
    expect(map['production.year']).to.be.null;

    done();

  });

});