var chai = require('chai');
var should = chai.should();
var report = require('../../../lib/model/response/report');

describe('report model test', function () {

  var car = {car: 'car'};
  var events = {events: 'events'};

  it('should create model', function (done) {

    var reportModel = new report.Report(
      car,
      events
    );

    should.exist(reportModel);
    reportModel.car.should.be.equal(car);
    reportModel.events.should.be.equal(events);

    done();
  });

  it('should create model by builder', function (done) {

    var reportModel = new report.ReportBuilder()
      .withCar(car)
      .withEvents(events)
      .build();

    should.exist(reportModel);
    reportModel.car.should.be.equal(car);
    reportModel.events.should.be.equal(events);

    done();
  });

});