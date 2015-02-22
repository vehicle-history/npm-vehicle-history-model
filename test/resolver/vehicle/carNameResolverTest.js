var options = require('config');
var carNameResolver = require('../../../lib/resolver/vehicle/carNameResolver');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car name resolver test', function () {

  it('should return valid name object', function (done) {

    var map = {
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

  it('should return null for all null values', function (done) {

    var map = {
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

  it('should return object with some null values', function (done) {

    var map = {
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

  it('should return null unknown make and other null values', function (done) {

    var map = {
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