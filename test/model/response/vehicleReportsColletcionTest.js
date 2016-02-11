var chai = require('chai');
var should = chai.should();
var vehicleReportsCollection = require('../../../lib/model/response/vehicleReportsCollection');

describe('vehicleReportsCollection model test', function () {

  var count = 1;
  var vehicleReports = {vehicleReports: 'vehicleReports'};

  it('should create model', function (done) {

    var vehicleReportsCollectionModel = new vehicleReportsCollection.VehicleReportsCollection(
      count,
      vehicleReports
    );

    should.exist(vehicleReportsCollectionModel);
    vehicleReportsCollectionModel.count.should.be.equal(count);
    vehicleReportsCollectionModel.vehicleReports.should.be.equal(vehicleReports);

    done();
  });

  it('should create model by builder', function (done) {

    var vehicleReportsCollectionModel = new vehicleReportsCollection.VehicleReportsCollectionBuilder()
      .withCount(count)
      .withVehicleReports(vehicleReports)
      .build();

    should.exist(vehicleReportsCollectionModel);
    vehicleReportsCollectionModel.count.should.be.equal(count);
    vehicleReportsCollectionModel.vehicleReports.should.be.equal(vehicleReports);

    done();
  });

});