var CarNameResolver = require('../../lib/resolver/carNameResolver').CarNameResolver;
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var carNameResolver = new CarNameResolver();

describe('car name resolver test', function () {

  it('should return valid name object', function (done) {

    var map = {
      'name.manufacturer': 'manufacturer',
      'name.name': 'name',
      'name.model': 'model'
    };

    var response = carNameResolver.resolve(map);
    should.exist(response);
    response.manufacturer.should.equal('manufacturer');
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

    var response = carNameResolver.resolve(map);
    expect(response).to.be.null();
    done();

  });

  it('should return object with some null values', function (done) {

    var map = {
      'name.manufacturer': 'manufacturer',
      'name.name': null,
      'name.model': null
    };

    var response = carNameResolver.resolve(map);
    should.exist(response);
    response.manufacturer.should.equal('manufacturer');
    expect(response.name).to.be.null();
    expect(response.model).to.be.null();
    done();

  });
});