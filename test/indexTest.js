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

  it('should export CarEngineResolver with constants', function (done) {

    var CarEngineResolver = resolver.CarEngineResolver;

    should.exist(CarEngineResolver);
    should.exist(CarEngineResolver.ENGINE_CUBIC_CAPACITY_MAP_FIELD);
    CarEngineResolver.ENGINE_CUBIC_CAPACITY_MAP_FIELD.should.equal('engine.cc');
    should.exist(CarEngineResolver.ENGINE_FUEL_TYPE_MAP_FIELD);
    CarEngineResolver.ENGINE_FUEL_TYPE_MAP_FIELD.should.equal('engine.fuel');
    done();
  });

  it('should export CarInspectionResolver with constants', function (done) {

    var CarInspectionResolver = resolver.CarInspectionResolver;

    should.exist(CarInspectionResolver);
    should.exist(CarInspectionResolver.INSPECTION_STATUS_MAP_FIELD);
    CarInspectionResolver.INSPECTION_STATUS_MAP_FIELD.should.equal('inspection.status');
    done();
  });

  it('should export CarMileageResolver with constants', function (done) {

    var CarMileageResolver = resolver.CarMileageResolver;

    should.exist(CarMileageResolver);
    should.exist(CarMileageResolver.MILEAGE_VALUE_MAP_FIELD);
    CarMileageResolver.MILEAGE_VALUE_MAP_FIELD.should.equal('mileage.value');
    should.exist(CarMileageResolver.MILEAGE_TYPE_MAP_FIELD);
    CarMileageResolver.MILEAGE_TYPE_MAP_FIELD.should.equal('mileage.type');
    done();
  });

  it('should export CarNameResolver with constants', function (done) {

    var CarNameResolver = resolver.CarNameResolver;

    should.exist(CarNameResolver);
    should.exist(CarNameResolver.MANUFACTURER_MAP_FIELD);
    CarNameResolver.MANUFACTURER_MAP_FIELD.should.equal('name.manufacturer');
    should.exist(CarNameResolver.NAME_MAP_FIELD);
    CarNameResolver.NAME_MAP_FIELD.should.equal('name.name');
    should.exist(CarNameResolver.MODEL_MAP_FIELD);
    CarNameResolver.MODEL_MAP_FIELD.should.equal('name.model');
    done();
  });

  it('should export CarPolicyResolver with constants', function (done) {

    var CarPolicyResolver = resolver.CarPolicyResolver;

    should.exist(CarPolicyResolver);
    should.exist(CarPolicyResolver.POLICY_STATUS_MAP_FIELD);
    CarPolicyResolver.POLICY_STATUS_MAP_FIELD.should.equal('policy.status');
    done();
  });

  it('should export CarProductionResolver with constants', function (done) {

    var CarProductionResolver = resolver.CarProductionResolver;

    should.exist(CarProductionResolver);
    should.exist(CarProductionResolver.PRODUCTION_YEAR_MAP_FIELD);
    CarProductionResolver.PRODUCTION_YEAR_MAP_FIELD.should.equal('production.year');
    done();
  });

  it('should export CarRegistrationResolver with constants', function (done) {

    var CarRegistrationResolver = resolver.CarRegistrationResolver;

    should.exist(CarRegistrationResolver);
    should.exist(CarRegistrationResolver.REGISTRATION_STATUS_MAP_FIELD);
    CarRegistrationResolver.REGISTRATION_STATUS_MAP_FIELD.should.equal('registration.status');
    done();
  });

  it('should export CarStoleResolver', function (done) {

    var CarStoleResolver = resolver.CarStoleResolver;

    should.exist(CarStoleResolver);
    done();
  });

  it('should export CarVariantResolver with constants', function (done) {

    var CarVariantResolver = resolver.CarVariantResolver;

    should.exist(CarVariantResolver);
    should.exist(CarVariantResolver.VARIANT_TYPE_MAP_FIELD);
    CarVariantResolver.VARIANT_TYPE_MAP_FIELD.should.equal('variant.type');
    should.exist(CarVariantResolver.VARIANT_KIND_MAP_FIELD);
    CarVariantResolver.VARIANT_KIND_MAP_FIELD.should.equal('variant.kind');
    done();
  });

});