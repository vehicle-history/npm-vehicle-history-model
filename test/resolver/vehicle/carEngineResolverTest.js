const options = require('config');
const carEngineResolver = require('../../../lib/resolver/vehicle/carEngineResolver');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car engine resolver test', () => {

  it('should return valid cc and fuel type', done => {

    const map = {
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

  it('should return null for all null values', done => {

    const map = {
      'engine.cc': null,
      'engine.fuel': null
    };

    carEngineResolver.resolve(map, options);
    expect(map['engine.cc']).to.be.null;
    should.exist(map['engine.fuel']);
    map['engine.fuel'].should.equal('OTHER');
    done();
  });

  it('should return object with some null values', done => {

    const map = {
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

  it('should return default fuel type for unknown value', done => {

    const map = {
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