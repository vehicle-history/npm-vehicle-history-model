const options = require('config');
const nameBuilder = require('../../../lib/builder/vehicle/nameBuilder');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car name builder test', () => {

  it('should return valid name object', done => {

    const map = {
      'name.manufacturer': 'AUDI',
      'name.name': 'name',
      'name.model': 'model'
    };

    const response = nameBuilder.build(map);

    should.exist(response);
    response.make.should.equal('AUDI');
    response.name.should.equal('name');
    response.model.should.equal('model');
    done();

  });

  it('should return null for all null values', done => {

    const map = {
      'name.manufacturer': null,
      'name.name': null,
      'name.model': null
    };

    const response = nameBuilder.build(map);
    expect(response).to.be.null;
    done();

  });

  it('should return object with some null values', done => {

    const map = {
      'name.manufacturer': 'BMW',
      'name.name': null,
      'name.model': null
    };

    const response = nameBuilder.build(map);
    should.exist(response);
    response.make.should.equal('BMW');
    expect(response.name).to.be.null;
    expect(response.model).to.be.null;
    done();

  });

  it('should return null for UNKNOWN make and other nulls', done => {

    const map = {
      'name.manufacturer': 'UNKNOWN',
      'name.name': null,
      'name.model': null
    };

    const response = nameBuilder.build(map);
    expect(response).to.be.null;
    done();

  });

});