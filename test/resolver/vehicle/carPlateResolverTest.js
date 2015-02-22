var options = require('config');
var carPlateResolver = require('../../../lib/resolver/vehicle/carPlateResolver');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car plate resolver test', function () {

  it('should return plate', function (done) {

    var map = {
      'plate.value': 'PAA 1111',
      'plate.country': 'pl'
    };

    carPlateResolver.resolve(map, options);

    should.exist(map['plate.value']);
    map['plate.value'].should.equal('PAA 1111');
    should.exist(map['plate.country']);
    map['plate.country'].should.equal('PL');

    done();
  });

  it('should return UNKNOWN country for null values', function (done) {

    var map = {
      'plate.value': null,
      'plate.country': null
    };

    carPlateResolver.resolve(map, options);

    expect(map['plate.value']).to.be.null;
    should.exist(map['plate.country']);
    map['plate.country'].should.equal('UNKNOWN');
    done();
  });

  it('should return UNKNOWN country for unknown value and null plate', function (done) {

    var map = {
      'plate.value': null,
      'plate.country': 'unknown'
    };

    carPlateResolver.resolve(map, options);

    expect(map['plate.value']).to.be.null;
    should.exist(map['plate.country']);
    map['plate.country'].should.equal('UNKNOWN');
    done();
  });


  it('should return UNKNOWN country for unknown value', function (done) {

    var map = {
      'plate.value': 'PAA 1111',
      'plate.country': 'unknown-value'
    };

    carPlateResolver.resolve(map, options);

    should.exist(map['plate.value']);
    map['plate.value'].should.equal('PAA 1111');
    should.exist(map['plate.country']);
    map['plate.country'].should.equal('UNKNOWN');
    done();

  });
});