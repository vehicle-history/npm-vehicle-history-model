const options = require('config');
const carInspectionResolver = require('../../../lib/resolver/vehicle/carInspectionResolver');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car inspection resolver test', () => {

  it('should return valid inspection', done => {

    const map = {
      'inspection.status': 'actual'
    };

    carInspectionResolver.resolve(map, options);

    should.exist(map['inspection.status']);
    map['inspection.status'].should.equal('UPTODATE');
    done();
  });

  it('should return null for all null values', done => {

    const map = {
      'inspection.status': null
    };

    carInspectionResolver.resolve(map, options);
    map['inspection.status'].should.equal('UNKNOWN');
    done();
  });

});