var options = require('config');
var chai = require('chai');
var should = chai.should();

describe('index test', function () {

  it('should export meta version', function (done) {

    var version = require('../index').VERSION;
    should.exist(version);
    done();
  });

  it('should export CarEngineResolver with constants', function (done) {

    var CarEngineResolver = require('../index').CarEngineResolver;

    should.exist(CarEngineResolver);
    should.exist(CarEngineResolver.ENGINE_CUBIC_CAPACITY_MAP_FIELD);
    CarEngineResolver.ENGINE_CUBIC_CAPACITY_MAP_FIELD.should.equal('engine.cc');
    should.exist(CarEngineResolver.ENGINE_FUEL_TYPE_MAP_FIELD);
    CarEngineResolver.ENGINE_FUEL_TYPE_MAP_FIELD.should.equal('engine.fuel');
    done();
  });

  it('should export CarInspectionResolver with constants', function (done) {

    var CarInspectionResolver = require('../index').CarInspectionResolver;

    should.exist(CarInspectionResolver);
    should.exist(CarInspectionResolver.INSPECTION_STATUS_MAP_FIELD);
    CarInspectionResolver.INSPECTION_STATUS_MAP_FIELD.should.equal('inspection.status');
    done();
  });

  it('should export CarMileageResolver with constants', function (done) {

    var CarMileageResolver = require('../index').CarMileageResolver;

    should.exist(CarMileageResolver);
    should.exist(CarMileageResolver.MILEAGE_VALUE_MAP_FIELD);
    CarMileageResolver.MILEAGE_VALUE_MAP_FIELD.should.equal('mileage.value');
    should.exist(CarMileageResolver.MILEAGE_TYPE_MAP_FIELD);
    CarMileageResolver.MILEAGE_TYPE_MAP_FIELD.should.equal('mileage.type');
    done();
  });

  it('should export CarNameResolver with constants', function (done) {

    var CarNameResolver = require('../index').CarNameResolver;

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

    var CarPolicyResolver = require('../index').CarPolicyResolver;

    should.exist(CarPolicyResolver);
    should.exist(CarPolicyResolver.POLICY_STATUS_MAP_FIELD);
    CarPolicyResolver.POLICY_STATUS_MAP_FIELD.should.equal('policy.status');
    done();
  });

  it('should export CarProductionResolver with constants', function (done) {

    var CarProductionResolver = require('../index').CarProductionResolver;

    should.exist(CarProductionResolver);
    should.exist(CarProductionResolver.PRODUCTION_YEAR_MAP_FIELD);
    CarProductionResolver.PRODUCTION_YEAR_MAP_FIELD.should.equal('production.year');
    done();
  });

  it('should export CarRegistrationResolver with constants', function (done) {

    var CarRegistrationResolver = require('../index').CarRegistrationResolver;

    should.exist(CarRegistrationResolver);
    should.exist(CarRegistrationResolver.REGISTRATION_STATUS_MAP_FIELD);
    CarRegistrationResolver.REGISTRATION_STATUS_MAP_FIELD.should.equal('registration.status');
    done();
  });

  it('should export CarStoleResolver', function (done) {

    var CarStoleResolver = require('../index').CarStoleResolver;

    should.exist(CarStoleResolver);
    done();
  });

  it('should export CarVariantResolver with constants', function (done) {

    var CarVariantResolver = require('../index').CarVariantResolver;

    should.exist(CarVariantResolver);
    should.exist(CarVariantResolver.VARIANT_TYPE_MAP_FIELD);
    CarVariantResolver.VARIANT_TYPE_MAP_FIELD.should.equal('variant.type');
    should.exist(CarVariantResolver.VARIANT_KIND_MAP_FIELD);
    CarVariantResolver.VARIANT_KIND_MAP_FIELD.should.equal('variant.kind');
    done();
  });

});