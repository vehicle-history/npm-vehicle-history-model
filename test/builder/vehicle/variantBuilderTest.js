var options = require('config');
var variantBuilder = require('../../../lib/builder/vehicle/variantBuilder');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car variant builder test', function () {

  it('should return valid type and kind', function (done) {

    var map = {
      'variant.type': 'VAN',
      'variant.kind': 'HATCHBACK'
    };

    var response = variantBuilder.build(map);

    should.exist(response);
    should.exist(response.type);
    response.type.should.equal('VAN');
    should.exist(response.kind);
    response.kind.should.equal('HATCHBACK');
    done();
  });


  it('should return default typ for unknown value', function (done) {

    var map = {
      'variant.type': 'UNKNOWN',
      'variant.kind': 'HATCHBACK'
    };

    var response = variantBuilder.build(map)

    should.exist(response);
    should.exist(response.type);
    response.type.should.equal('UNKNOWN');
    should.exist(response.kind);
    response.kind.should.equal('HATCHBACK');
    done();
  });

  it('should return object with some null values', function (done) {

    var map = {
      'variant.type': 'VAN',
      'variant.kind': 'UNKNOWN'
    };

    var response = variantBuilder.build(map);
    should.exist(response);
    should.exist(response.type);
    response.type.should.equal('VAN');
    should.exist(response.kind);
    response.kind.should.equal('UNKNOWN');
    done();
  });

  it('should return null type for unknown values', function (done) {

    var map = {
      'variant.type': 'UNKNOWN',
      'variant.kind': 'UNKNOWN'
    };

    var response = variantBuilder.build(map);
    expect(response).to.be.null;
    done();
  });


});