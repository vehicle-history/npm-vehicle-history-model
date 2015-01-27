var options = require('config');
var SearchCarRequest = require('../../lib/model/searchCarRequest').SearchCarRequest;
var carResponseBuilder = require('../../lib/builder/carResponseBuilder');
var chai = require('chai');
var should = chai.should();

describe('car response builder test', function () {

  it('should build car response', function (done) {

    var plate = 'AAE 1111';
    var vin = 'ABC123456789DEF';
    var firstRegistrationDate = '21-11-2011';
    var searchCarRequest = new SearchCarRequest(plate, vin, firstRegistrationDate);

    var map = {
      'name.manufacturer': 'manufacturer',
      'name.name': 'name',
      'name.model': 'model',
      'variant.type': 'van',
      'variant.kind': 'limousine',
      'engine.cc': '1396',
      'engine.fuel': 'diesel',
      'production.year': '1988',
      'policy.status': 'not actual',
      'registration.status': 'registered',
      'registration.firstDate': firstRegistrationDate,
      'inspection.status': 'actual',
      'mileage.value': '111',
      'mileage.type': 'mile',
      'status.stolen': true,
      'plate.value': plate,
      'plate.country': 'pl'
    };

    carResponseBuilder.build(map, searchCarRequest, options, function (err, car) {
      should.exist(car);

      car.name.make.should.equal('manufacturer');
      car.name.name.should.equal('name');
      car.name.model.should.equal('model');

      car.type.type.should.equal('VAN');
      car.type.kind.should.equal('LIMOUSINE');

      car.engine.cubicCapacity.should.equal(1396);
      car.engine.fuel.should.equal('DIESEL');

      car.production.year.should.equal(1988);
      car.policy.status.should.equal('OUTDATED');
      car.registration.status.should.equal('REGISTERED');
      car.registration.firstAt.should.equal('2011-11-21T00:00:00.000Z');
      car.inspection.status.should.equal('UPTODATE');
      car.mileage.value.should.equal(111);
      car.mileage.type.should.equal('MILE');

      car.stolen.should.be.true();

      car.plate.value.should.equal('AAE 1111');
      car.plate.country.should.equal('pl');

      car.vin.should.equal('ABC123456789DEF');

      done();
    });

  });
});