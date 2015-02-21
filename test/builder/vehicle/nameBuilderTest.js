var options = require('config');
var nameBuilder = require('../../../lib/builder/vehicle/nameBuilder');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car name builder test', function () {

  it('should return valid name object', function (done) {

    var map = {
      'name.manufacturer': 'AUDI',
      'name.name': 'name',
      'name.model': 'model'
    };

    var response = nameBuilder.build(map);

    should.exist(response);
    response.make.should.equal('AUDI');
    response.name.should.equal('name');
    response.model.should.equal('model');
    done();

  });

  it('should return null for all null values', function (done) {

    var map = {
      'name.manufacturer': null,
      'name.name': null,
      'name.model': null
    };

    var response = nameBuilder.build(map);
    expect(response).to.be.null;
    done();

  });

  it('should return object with some null values', function (done) {

    var map = {
      'name.manufacturer': 'BMW',
      'name.name': null,
      'name.model': null
    };

    var response = nameBuilder.build(map);
    should.exist(response);
    response.make.should.equal('BMW');
    expect(response.name).to.be.null;
    expect(response.model).to.be.null;
    done();

  });

  it('should return null for UNKNOWN make and other nulls', function (done) {

    var map = {
      'name.manufacturer': 'UNKNOWN',
      'name.name': null,
      'name.model': null
    };

    var response = nameBuilder.build(map);
    expect(response).to.be.null;
    done();

  });

});