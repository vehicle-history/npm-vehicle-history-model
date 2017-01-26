const options = require('config');
const carNameResolver = require('../../../lib/resolver/vehicle/carNameResolver');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car name resolver test', () => {

  it('should return valid name object', done => {

    const map = {
      'name.manufacturer': 'AUDI',
      'name.name': 'name',
      'name.model': 'model'
    };

    carNameResolver.resolve(map, options);

    should.exist(map['name.manufacturer']);
    map['name.manufacturer'].should.equal('AUDI');
    should.exist(map['name.name']);
    map['name.name'].should.equal('name');
    should.exist(map['name.model']);
    map['name.model'].should.equal('model');

    done();

  });

  it('should return null for all null values', done => {

    const map = {
      'name.manufacturer': null,
      'name.name': null,
      'name.model': null
    };

    carNameResolver.resolve(map, options);
    should.exist(map['name.manufacturer']);
    map['name.manufacturer'].should.equal('UNKNOWN');
    expect(map['name.name']).to.be.null;
    expect(map['name.model']).to.be.null;

    done();

  });

  it('should return object with some null values', done => {

    const map = {
      'name.manufacturer': 'BMW',
      'name.name': null,
      'name.model': null
    };

    carNameResolver.resolve(map, options);
    should.exist(map['name.manufacturer']);
    map['name.manufacturer'].should.equal('BMW');
    expect(map['name.name']).to.be.null;
    expect(map['name.model']).to.be.null;

    done();

  });

  it('should return null unknown make and other null values', done => {

    const map = {
      'name.manufacturer': 'unknown-value',
      'name.name': null,
      'name.model': null
    };

    carNameResolver.resolve(map, options);
    should.exist(map['name.manufacturer']);
    map['name.manufacturer'].should.equal('UNKNOWN');
    expect(map['name.name']).to.be.null;
    expect(map['name.model']).to.be.null;
    done();

  });
});