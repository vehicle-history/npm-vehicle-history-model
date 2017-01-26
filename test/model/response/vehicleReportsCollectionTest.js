const chai = require('chai');
const should = chai.should();
const vehicleReportsCollection = require('../../../lib/model/response/vehicleReportsCollection');

describe('vehicleReportsCollection model test', () => {

  const count = 'count';
  const vehicleReports = 'vehicleReports';

  it('should create model', done => {

    const vehicleReportsCollectionModel = new vehicleReportsCollection.VehicleReportsCollection(
      count,
      vehicleReports
    );

    should.exist(vehicleReportsCollectionModel);
    vehicleReportsCollectionModel.count.should.be.equal(count);
    vehicleReportsCollectionModel.vehicleReports.should.be.equal(vehicleReports);
    done();
  });

  it('should create model by builder', done => {

    const vehicleReportsCollectionModel = new vehicleReportsCollection.VehicleReportsCollectionBuilder()
      .withCount(count)
      .withVehicleReports(vehicleReports)
      .build();

    should.exist(vehicleReportsCollectionModel);
    vehicleReportsCollectionModel.count.should.be.equal(count);
    vehicleReportsCollectionModel.vehicleReports.should.be.equal(vehicleReports);
    done();
  });

});
