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

  it('should export SearchCarRequest model', function (done) {

    var SearchCarRequest = index.model.SearchCarRequest;
    should.exist(SearchCarRequest);
    done();
  });

  it('should export Car model', function (done) {

    var Car = index.model.Car;
    should.exist(Car);
    done();
  });

  it('should export Report model', function (done) {

    var Report = index.model.Report;
    should.exist(Report);
    done();
  });

  it('should export meta version', function (done) {

    var version = index.VERSION;
    should.exist(version);
    done();
  });
});