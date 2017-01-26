const chai = require('chai');
const should = chai.should();
const index = require('../index');
const resolver = index.resolver;

describe('index test', () => {

  it('should export VehicleNotFoundError error', done => {

    const VehicleNotFoundError = index.error.VehicleNotFoundError;
    should.exist(VehicleNotFoundError);
    done();
  });

  it('should export ServiceUnavailableError error', done => {

    const ServiceUnavailableError = index.error.ServiceUnavailableError;
    should.exist(ServiceUnavailableError);
    done();
  });

  it('should export InvalidVehiclePlateError error', done => {

    const InvalidVehiclePlateError = index.error.InvalidVehiclePlateError;
    should.exist(InvalidVehiclePlateError);
    done();
  });

  it('should export carResponseBuilder function', done => {

    const carResponseBuilder = index.builder.carResponseBuilder;
    should.exist(carResponseBuilder);
    done();
  });

  it('should export responseBuilder function', done => {

    const responseBuilder = index.builder.responseBuilder;
    should.exist(responseBuilder);
    done();
  });

  it('should export eventsResponseBuilder function', done => {

    const eventsResponseBuilder = index.builder.eventsResponseBuilder;
    should.exist(eventsResponseBuilder);
    done();
  });

  it('should export eventEnum function', done => {

    const eventEnum = index.enum.eventEnum;
    should.exist(eventEnum);
    done();
  });

  it('should export variantEnum function', done => {

    const variantEnum = index.enum.variantEnum;
    should.exist(variantEnum);
    done();
  });

  it('should export mileageEnum function', done => {

    const mileageEnum = index.enum.mileageEnum;
    should.exist(mileageEnum);
    done();
  });

  it('should export SearchCarRequest model', done => {

    const searchCarRequest = index.model.searchCarRequest;
    should.exist(searchCarRequest);
    should.exist(searchCarRequest.SearchCarRequest);
    should.exist(searchCarRequest.SearchCarRequestBuilder);
    done();
  });

  it('should export Car model', done => {

    const car = index.model.car;
    should.exist(car);
    should.exist(car.Car);
    should.exist(car.CarBuilder);
    done();
  });

  it('should export Report model', done => {

    const report = index.model.report;
    should.exist(report);
    should.exist(report.Report);
    should.exist(report.ReportBuilder);
    done();
  });

  it('should export vehicleReportsCollection model', done => {

    const vehicleReportsCollection = index.model.vehicleReportsCollection;
    should.exist(vehicleReportsCollection);
    should.exist(vehicleReportsCollection.VehicleReportsCollection);
    should.exist(vehicleReportsCollection.VehicleReportsCollectionBuilder);
    done();
  });

  it('should export changedRegistrationLocationEvent function', done => {

    const changedRegistrationLocationEvent = index.model.changedRegistrationLocationEvent;
    should.exist(changedRegistrationLocationEvent);
    done();
  });

  it('should export inspectionEvent function', done => {

    const inspectionEvent = index.model.inspectionEvent;
    should.exist(inspectionEvent);
    done();
  });

  it('should export location function', done => {

    const location = index.model.location;
    should.exist(location);
    done();
  });

  it('should export mileage function', done => {

    const mileage = index.model.mileage;
    should.exist(mileage);
    done();
  });

  it('should export resolver', done => {

    const resolver = index.resolver.resolver;
    should.exist(resolver);
    done();
  });

  it('should export eventsResolver', done => {

    const eventsResolver = index.resolver.eventsResolver;
    should.exist(eventsResolver);
    done();
  });

  it('should export vehicleResolver', done => {

    const vehicleResolver = index.resolver.vehicleResolver;
    should.exist(vehicleResolver);
    done();
  });

  it('should export meta version', done => {

    const version = index.VERSION;
    should.exist(version);
    done();
  });
});