var options = require('config');
var carVariantResolver = require('../../../lib/resolver/vehicle/carVariantResolver');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car variant resolver test', function () {

  it('should return valid type and kind', function (done) {

    var map = {
      'variant.type': 'van',
      'variant.kind': 'hatchback'
    };

    carVariantResolver.resolve(map, options);

    should.exist(map['variant.type']);
    map['variant.type'].should.equal('VAN');

    should.exist(map['variant.kind']);
    map['variant.kind'].should.equal('HATCHBACK');

    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'variant.type': null,
      'variant.kind': null
    };

    carVariantResolver.resolve(map, options);

    should.exist(map['variant.type']);
    map['variant.type'].should.equal('UNKNOWN');

    should.exist(map['variant.kind']);
    map['variant.kind'].should.equal('UNKNOWN');

    done();
  });

  it('should return object with some null values', function (done) {

    var map = {
      'variant.type': 'van',
      'variant.kind': null
    };

    carVariantResolver.resolve(map, options);

    should.exist(map['variant.type']);
    map['variant.type'].should.equal('VAN');

    should.exist(map['variant.kind']);
    map['variant.kind'].should.equal('UNKNOWN');


    done();
  });

  it('should return default type for unknown value', function (done) {

    var map = {
      'variant.type': 'unknown',
      'variant.kind': null
    };

    carVariantResolver.resolve(map, options);

    should.exist(map['variant.type']);
    map['variant.type'].should.equal('UNKNOWN');

    should.exist(map['variant.kind']);
    map['variant.kind'].should.equal('UNKNOWN');

    done();
  });

  it('should return default kind for unknown value and default type for unknown value', function (done) {

    var map = {
      'variant.type': 'unknown',
      'variant.kind': 'unknown'
    };

    carVariantResolver.resolve(map, options);

    should.exist(map['variant.type']);
    map['variant.type'].should.equal('UNKNOWN');

    should.exist(map['variant.kind']);
    map['variant.kind'].should.equal('UNKNOWN');

    done();
  });

});