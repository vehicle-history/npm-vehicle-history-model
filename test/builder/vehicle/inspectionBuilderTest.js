const options = require('config');
const inspectionBuilder = require('../../../lib/builder/vehicle/inspectionBuilder');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car inspection builder test', () => {

  it('should return valid inspection', done => {

    const map = {
      'inspection.status': 'UPTODATE'
    };

    const response = inspectionBuilder.build(map);

    should.exist(response);
    should.exist(response.status);
    response.status.should.equal('UPTODATE');
    done();
  });

  it('should return null for all null values', done => {

    const map = {
      'inspection.status': null
    };

    const response = inspectionBuilder.build(map);
    expect(response).to.be.null;
    done();
  });


});