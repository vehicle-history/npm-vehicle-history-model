const options = require('config');
const SearchCarRequest = require('../../lib/model/searchCarRequest').SearchCarRequest;
const carResponseBuilder = require('../../lib/builder/vehicleResponseBuilder');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('vehicle response builder test', () => {

  it('should build vehicle response', done => {

    const map = {
      'name.manufacturer': 'AUDI',
      'name.name': 'name',
      'name.model': 'model',
      'variant.type': 'CAR',
      'variant.kind': 'LIMOUSINE',
      'engine.cc': 1396,
      'engine.fuel': 'DIESEL',
      'production.year': 1988,
      'policy.status': 'OUTDATED',
      'registration.status': 'REGISTERED',
      'registration.firstDate': '2011-11-21T00:00:00.000Z',
      'inspection.status': 'UPTODATE',
      'mileage.value': 111,
      'mileage.type': 'MILE',
      'status.stolen': true,
      'plate.value': 'AAE 1111',
      'plate.country': 'PL',
      'vin.value': 'ABC123456789DEF'
    };

    carResponseBuilder.build(map, (err, car) => {
      should.exist(car);

      expect(car).to.have.deep.property('name.make', 'AUDI');
      expect(car).to.have.deep.property('name.name', 'name');
      expect(car).to.have.deep.property('name.model', 'model');

      expect(car).to.have.deep.property('type.type', 'CAR');
      expect(car).to.have.deep.property('type.kind', 'LIMOUSINE');

      expect(car).to.have.deep.property('engine.cubicCapacity', 1396);
      expect(car).to.have.deep.property('engine.fuel', 'DIESEL');

      expect(car).to.have.deep.property('production.year', 1988);

      expect(car).to.have.deep.property('policy.status', 'OUTDATED');

      expect(car).to.have.deep.property('registration.status', 'REGISTERED');
      expect(car).to.have.deep.property('registration.firstAt', '2011-11-21T00:00:00.000Z');

      expect(car).to.have.deep.property('inspection.status', 'UPTODATE');
      expect(car).to.have.deep.property('mileage.value', 111);
      expect(car).to.have.deep.property('mileage.type', 'MILE');

      expect(car).to.have.property('stolen', true);

      expect(car).to.have.deep.property('plate.value', 'AAE 1111');
      expect(car).to.have.deep.property('plate.country', 'PL');

      expect(car).to.have.property('vin', 'ABC123456789DEF');

      done();
    });

  });
});