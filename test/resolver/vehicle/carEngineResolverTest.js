var options = require('config');
var carEngineResolver = require('../../../lib/resolver/vehicle/carEngineResolver');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car engine resolver test', function () {

  it('should return valid cc and fuel type', function (done) {

    var map = {
      'engine.cc': 1398,
      'engine.fuel': 'petrol'
    };

    carEngineResolver.resolve(map, options);

    should.exist(map['engine.cc']);
    map['engine.cc'].should.equal(1398);
    should.exist(map['engine.fuel']);
    map['engine.fuel'].should.equal('PETROL');
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'engine.cc': null,
      'engine.fuel': null
    };

    carEngineResolver.resolve(map, options);
    expect(map['engine.cc']).to.be.null;
    should.exist(map['engine.fuel']);
    map['engine.fuel'].should.equal('OTHER');
    done();
  });

  it('should return object with some null values', function (done) {

    var map = {
      'engine.cc': '1398 cm³',
      'engine.fuel': null
    };

    carEngineResolver.resolve(map, options);

    should.exist(map['engine.cc']);
    map['engine.cc'].should.equal(1398);
    should.exist(map['engine.fuel']);
    map['engine.fuel'].should.equal('OTHER');

    done();
  });

  it('should return default fuel type for unknown value', function (done) {

    var map = {
      'engine.cc': null,
      'engine.fuel': 'unknown'
    };

    carEngineResolver.resolve(map, options);
    expect(map['engine.cc']).to.be.null;
    should.exist(map['engine.fuel']);
    map['engine.fuel'].should.equal('OTHER');
    done();
  });

});