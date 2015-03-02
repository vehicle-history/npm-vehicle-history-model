var chai = require('chai');
var should = chai.should();
var report = require('../../../lib/model/response/report');

describe('report model test', function () {

  var vehicle = {vehicle: 'vehicle'};
  var events = {events: 'events'};

  it('should create model', function (done) {

    var reportModel = new report.Report(
      vehicle,
      events
    );

    should.exist(reportModel);
    reportModel.vehicle.should.be.equal(vehicle);
    reportModel.events.should.be.equal(events);

    done();
  });

  it('should create model by builder', function (done) {

    var reportModel = new report.ReportBuilder()
      .withVehicle(vehicle)
      .withEvents(events)
      .build();

    should.exist(reportModel);
    reportModel.vehicle.should.be.equal(vehicle);
    reportModel.events.should.be.equal(events);

    done();
  });

});