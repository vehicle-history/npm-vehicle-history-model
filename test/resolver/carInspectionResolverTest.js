var options = require('config');
var CarInspectionResolver = require('../../lib/resolver/carInspectionResolver').CarInspectionResolver;
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var carInspectionResolver = new CarInspectionResolver();

describe('car inspection resolver test', function () {

  it('should return valid inspection', function (done) {

    var map = {
      'inspection.status': 'aktualne'
    };

    var response = carInspectionResolver.buildResponse(map, options);

    should.exist(response);
    should.exist(response.status);
    response.status.should.equal('UPTODATE');
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'inspection.status': null
    };

    var response = carInspectionResolver.buildResponse(map), options;
    expect(response).to.be.null();
    done();
  });

});