var chai = require('chai');
var should = chai.should();
var index = require('../index');
var resolver = index.resolver;

describe('index test', function () {

  it('should export VehicleNotFoundError error', function (done) {

    var VehicleNotFoundError = index.error.VehicleNotFoundError;
    should.exist(VehicleNotFoundError);
    done();
  });

  it('should export ServiceUnavailableError error', function (done) {

    var ServiceUnavailableError = index.error.ServiceUnavailableError;
    should.exist(ServiceUnavailableError);
    done();
  });

  it('should export InvalidVehiclePlateError error', function (done) {

    var InvalidVehiclePlateError = index.error.InvalidVehiclePlateError;
    should.exist(InvalidVehiclePlateError);
    done();
  });

  it('should export carResponseBuilder function', function (done) {

    var carResponseBuilder = index.builder.carResponseBuilder;
    should.exist(carResponseBuilder);
    done();
  });

  it('should export responseBuilder function', function (done) {

    var responseBuilder = index.builder.responseBuilder;
    should.exist(responseBuilder);
    done();
  });

  it('should export eventsResponseBuilder function', function (done) {

    var eventsResponseBuilder = index.builder.eventsResponseBuilder;
    should.exist(eventsResponseBuilder);
    done();
  });

  it('should export eventEnum function', function (done) {

    var eventEnum = index.enum.eventEnum;
    should.exist(eventEnum);
    done();
  });

  it('should export variantEnum function', function (done) {

    var variantEnum = index.enum.variantEnum;
    should.exist(variantEnum);
    done();
  });

  it('should export SearchCarRequest model', function (done) {

    var searchCarRequest = index.model.searchCarRequest;
    should.exist(searchCarRequest);
    should.exist(searchCarRequest.SearchCarRequest);
    should.exist(searchCarRequest.SearchCarRequestBuilder);
    done();
  });

  it('should export Car model', function (done) {

    var car = index.model.car;
    should.exist(car);
    should.exist(car.Car);
    should.exist(car.CarBuilder);
    done();
  });

  it('should export Report model', function (done) {

    var report = index.model.report;
    should.exist(report);
    should.exist(report.Report);
    should.exist(report.ReportBuilder);
    done();
  });

  it('should export vehicleReportsCollection model', function (done) {

    var vehicleReportsCollection = index.model.vehicleReportsCollection;
    should.exist(vehicleReportsCollection);
    should.exist(vehicleReportsCollection.VehicleReportsCollection);
    should.exist(vehicleReportsCollection.VehicleReportsCollectionBuilder);
    done();
  });

  it('should export changedRegistrationLocationEvent function', function (done) {

    var changedRegistrationLocationEvent = index.model.changedRegistrationLocationEvent;
    should.exist(changedRegistrationLocationEvent);
    done();
  });

  it('should export inspectionEvent function', function (done) {

    var inspectionEvent = index.model.inspectionEvent;
    should.exist(inspectionEvent);
    done();
  });

  it('should export location function', function (done) {

    var location = index.model.location;
    should.exist(location);
    done();
  });

  it('should export mileage function', function (done) {

    var mileage = index.model.mileage;
    should.exist(mileage);
    done();
  });

  it('should export resolver', function (done) {

    var resolver = index.resolver.resolver;
    should.exist(resolver);
    done();
  });

  it('should export eventsResolver', function (done) {

    var eventsResolver = index.resolver.eventsResolver;
    should.exist(eventsResolver);
    done();
  });

  it('should export vehicleResolver', function (done) {

    var vehicleResolver = index.resolver.vehicleResolver;
    should.exist(vehicleResolver);
    done();
  });

  it('should export meta version', function (done) {

    var version = index.VERSION;
    should.exist(version);
    done();
  });
});