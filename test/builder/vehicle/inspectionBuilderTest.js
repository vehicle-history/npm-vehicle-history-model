var options = require('config');
var inspectionBuilder = require('../../../lib/builder/vehicle/inspectionBuilder');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car inspection builder test', function () {

  it('should return valid inspection', function (done) {

    var map = {
      'inspection.status': 'UPTODATE'
    };

    var response = inspectionBuilder.build(map);

    should.exist(response);
    should.exist(response.status);
    response.status.should.equal('UPTODATE');
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'inspection.status': null
    };

    var response = inspectionBuilder.build(map);
    expect(response).to.be.null;
    done();
  });


});