var options = require('config');
var CarVariantResolver = require('../../lib/resolver/carVariantResolver').CarVariantResolver;
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var carVariantResolver = new CarVariantResolver();

describe('car variant resolver test', function () {

  it('should return valid type and kind', function (done) {

    var map = {
      'variant.type': 'samochód dostawczy',
      'variant.kind': 'wielozadaniowy'
    };

    var response = carVariantResolver.resolve(map, options);

    should.exist(response);
    should.exist(response.type);
    response.type.should.equal('VAN');
    should.exist(response.kind);
    response.kind.should.equal('HATCHBACK');
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'variant.type': null,
      'variant.kind': null
    };

    var response = carVariantResolver.resolve(map, options);
    expect(response).to.be.null();
    done();
  });

  it('should return object with some null values', function (done) {

    var map = {
      'variant.type': 'samochód dostawczy',
      'variant.kind': null
    };

    var response = carVariantResolver.resolve(map, options);
    should.exist(response);
    should.exist(response.type);
    response.type.should.equal('VAN');
    should.exist(response.kind);
    response.kind.should.equal('OTHER');
    done();
  });

  it('should return default type for unknown value', function (done) {

    var map = {
      'variant.type': 'unknown',
      'variant.kind': null
    };

    var response = carVariantResolver.resolve(map, options);
    should.exist(response);
    should.exist(response.type);
    response.type.should.equal('CAR');
    should.exist(response.kind);
    response.kind.should.equal('OTHER');
    done();
  });

  it('should return default kind for unknown value and default type for unknown value', function (done) {

    var map = {
      'variant.type': 'unknown',
      'variant.kind': 'unknown'
    };

    var response = carVariantResolver.resolve(map, options);
    should.exist(response);
    should.exist(response.type);
    response.type.should.equal('CAR');
    should.exist(response.kind);
    response.kind.should.equal('OTHER');
    done();
  });

});