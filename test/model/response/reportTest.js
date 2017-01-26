const chai = require('chai');
const should = chai.should();
const report = require('../../../lib/model/response/report');

describe('report model test', () => {

  const vehicle = 'vehicle';
  const events = 'events';

  it('should create model', done => {

    const reportModel = new report.Report(
      vehicle,
      events
    );

    should.exist(reportModel);
    reportModel.vehicle.should.be.equal(vehicle);
    reportModel.events.should.be.equal(events);
    done();
  });

  it('should create model by builder', done => {

    const reportModel = new report.ReportBuilder()
      .withVehicle(vehicle)
      .withEvents(events)
      .build();

    should.exist(reportModel);
    reportModel.vehicle.should.be.equal(vehicle);
    reportModel.events.should.be.equal(events);
    done();
  });

});
