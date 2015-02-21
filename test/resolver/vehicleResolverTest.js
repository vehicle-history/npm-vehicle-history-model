var options = require('config');
var carResolver = require('../../lib/resolver/vehicleResolver');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('vehicle resolver test', function () {

  it('should resolve vehicle data', function (done) {

    var map = {
      'name.manufacturer': 'AUDI',
      'name.name': 'name',
      'name.model': 'model',
      'variant.type': 'van',
      'variant.kind': 'limousine',
      'engine.cc': '1396',
      'engine.fuel': 'diesel',
      'production.year': '1988',
      'policy.status': 'not actual',
      'registration.status': 'registered',
      'registration.firstDate': '21-11-2011',
      'inspection.status': 'actual',
      'mileage.value': '111',
      'mileage.type': 'mile',
      'status.stolen': true,
      'plate.value': 'AAE 1111',
      'plate.country': 'pl',
      'vin.value': 'ABC123456789DEF'
    };

    carResolver.resolver(map, options, function (err, map) {

      should.exist(map, 'map');

      expect(map).to.have.property('name.manufacturer', 'AUDI');
      expect(map).to.have.property('name.name', 'name');
      expect(map).to.have.property('name.model', 'model');


      expect(map).to.have.property('variant.type', 'VAN');
      expect(map).to.have.property('variant.kind', 'LIMOUSINE');

      expect(map).to.have.property('engine.cc', 1396);
      expect(map).to.have.property('engine.fuel', 'DIESEL');

      expect(map).to.have.property('production.year', 1988);

      expect(map).to.have.property('policy.status', 'OUTDATED');

      expect(map).to.have.property('registration.status', 'REGISTERED');
      expect(map).to.have.property('registration.status', 'REGISTERED');
//      expect(map).to.have.property('registration.firstDate', '2011-11-21T00:00:00.000Z');

      expect(map).to.have.property('inspection.status', 'UPTODATE');
      expect(map).to.have.property('mileage.value', 111);
      expect(map).to.have.property('mileage.type', 'MILE');

      expect(map).to.have.property('status.stolen', true);

      expect(map).to.have.property('plate.value', 'AAE 1111');
      expect(map).to.have.property('plate.country', 'PL');

      expect(map).to.have.property('vin.value', 'ABC123456789DEF');

      done();
    });

  });
});