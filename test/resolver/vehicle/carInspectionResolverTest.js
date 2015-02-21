var options = require('config');
var carInspectionResolver = require('../../../lib/resolver/vehicle/carInspectionResolver');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car inspection resolver test', function () {

  it('should return valid inspection', function (done) {

    var map = {
      'inspection.status': 'actual'
    };

    carInspectionResolver.resolve(map, options);

    should.exist(map['inspection.status']);
    map['inspection.status'].should.equal('UPTODATE');
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'inspection.status': null
    };

    carInspectionResolver.resolve(map, options);
    map['inspection.status'].should.equal('UNKNOWN');
    done();
  });

});