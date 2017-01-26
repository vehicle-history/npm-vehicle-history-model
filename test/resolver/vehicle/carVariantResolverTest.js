const options = require('config');
const carVariantResolver = require('../../../lib/resolver/vehicle/carVariantResolver');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car variant resolver test', () => {

  it('should return valid type and kind', done => {

    const map = {
      'variant.type': 'car',
      'variant.kind': 'hatchback'
    };

    carVariantResolver.resolve(map, options);

    should.exist(map['variant.type']);
    map['variant.type'].should.equal('CAR');

    should.exist(map['variant.kind']);
    map['variant.kind'].should.equal('HATCHBACK');

    done();
  });

  it('should return null for all null values', done => {

    const map = {
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

  it('should return object with some null values', done => {

    const map = {
      'variant.type': 'car',
      'variant.kind': null
    };

    carVariantResolver.resolve(map, options);

    should.exist(map['variant.type']);
    map['variant.type'].should.equal('CAR');

    should.exist(map['variant.kind']);
    map['variant.kind'].should.equal('UNKNOWN');


    done();
  });

  it('should return default type for unknown value', done => {

    const map = {
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

  it('should return default kind for unknown value and default type for unknown value', done => {

    const map = {
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