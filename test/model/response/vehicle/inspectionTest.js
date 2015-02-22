var chai = require('chai');
var should = chai.should();
var inspection = require('../../../../lib/model/response/vehicle/inspection');

describe('inspection model test', function () {

  var status = 'UNKNOWN';

  it('should create model', function (done) {

    var inspectionModel = new inspection.Inspection(
      status
    );

    should.exist(inspectionModel);
    inspectionModel.status.should.be.equal(status);

    done();
  });

  it('should create model by builder', function (done) {

    var inspectionModel = new inspection.InspectionBuilder()
      .withStatus(status)
      .build();

    should.exist(inspectionModel);
    inspectionModel.status.should.be.equal(status);

    done();
  });

});