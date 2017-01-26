const chai = require('chai');
const should = chai.should();
const inspection = require('../../../../lib/model/response/vehicle/inspection');

describe('inspection model test', () => {

  const status = 'status';

  it('should create model', done => {

    const inspectionModel = new inspection.Inspection(
      status
    );

    should.exist(inspectionModel);
    inspectionModel.status.should.be.equal(status);
    done();
  });

  it('should create model by builder', done => {

    const inspectionModel = new inspection.InspectionBuilder()
      .withStatus(status)
      .build();

    should.exist(inspectionModel);
    inspectionModel.status.should.be.equal(status);
    done();
  });

});
