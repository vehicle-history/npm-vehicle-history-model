var carStoleResolver = require('../../../lib/resolver/vehicle/carStoleResolver');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car stolen status resolver test', function () {

  it('should be stolen status', function (done) {

    var map = {
      'status.stolen': 'skradziony'
    };

    carStoleResolver.resolve(map);
    expect(map['status.stolen']).to.be.true;
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'status.stolen': null
    };

    carStoleResolver.resolve(map);
    expect(map['status.stolen']).to.be.false;
    done();
  });

});