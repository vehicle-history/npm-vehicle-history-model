var options = require('config');
var SearchCarRequest = require('../../lib/model/searchCarRequest').SearchCarRequest;
var responseBuilder = require('../../lib/builder/responseBuilder');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('response builder test', function () {

  it('should build response', function (done) {

    var plate = 'AAE 1111';
    var vin = 'ABC123456789DEF';
    var firstRegistrationDate = '21-11-2011';
    var searchCarRequest = new SearchCarRequest(plate, vin, firstRegistrationDate);

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
      'registration.firstDate': firstRegistrationDate,
      'inspection.status': 'actual',
      'mileage.value': '111',
      'mileage.type': 'mile',
      'status.stolen': true,
      'plate.value': plate,
      'plate.country': 'pl',
      'events': [
        { date: '13.06.2012',
          type: 'first-owner',
          description: 'First owner',
          owner: 'private',
          location: 'wielkopolskie',
          note: null,
          mileage: null
        },
        { date: '17.06.2012',
          type: 'first-registration',
          description: 'First registration',
          owner: null,
          location: null,
          note: null,
          mileage: null
        },
        { date: '17.06.2013',
          type: 'inspection',
          description: 'Inspection',
          owner: null,
          location: null,
          note: null,
          mileage: '177 000 km'
        },
        { date: '17.06.2014',
          type: 'deregistration',
          description: 'Deregistration',
          owner: null,
          location: null,
          note: 'note',
          mileage: null
        }
      ]
    };

    responseBuilder.build(map, searchCarRequest, options, function (err, response) {
      should.exist(response);
      should.exist(response.car);
      should.exist(response.events);
      var car = response.car;
      var events = response.events;

      car.name.make.should.equal('AUDI');
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

      car.stolen.should.be.true;

      car.plate.value.should.equal('AAE 1111');
      car.plate.country.should.equal('PL');

      car.vin.should.equal('ABC123456789DEF');

      expect(events).to.have.length(5);

      expect(events).to.have.deep.property('[0].type', 'PRODUCTION');
//      expect(events).to.have.deep.property('[0].createdAt', '1988-01-01T00:00:00.000Z');
      expect(events[0].note).to.be.null;
      expect(events[0].firstOwner).to.be.null;
      expect(events[0].ownerType).to.be.null;
      expect(events[0].location).to.be.null;
      expect(events[0].expireAt).to.be.null;
      expect(events[0].abroadRegistration).to.be.null;
      expect(events[0].mileage).to.be.null;

      expect(events).to.have.deep.property('[1].type', 'CHANGE_OWNER');
      expect(events).to.have.deep.property('[1].createdAt', '2012-06-13T00:00:00.000Z');
      expect(events[1].note).to.be.null;
      expect(events[1].firstOwner).to.be.true;
      expect(events).to.have.deep.property('[1].ownerType', 'PRIVATE');
      expect(events).to.have.deep.property('[1].location.state', 'wielkopolskie');
      expect(events).to.have.deep.property('[1].location.country', 'PL');
      expect(events[1].expireAt).to.be.null;
      expect(events[1].abroadRegistration).to.be.null;
      expect(events[1].mileage).to.be.null;

      expect(events).to.have.deep.property('[2].type', 'REGISTRATION');
      expect(events).to.have.deep.property('[2].createdAt', '2012-06-17T00:00:00.000Z');
      expect(events[2].note).to.be.null;
      expect(events[2].firstOwner).to.be.null;
      expect(events[2].ownerType).to.be.null;
      expect(events[2].location).to.be.null;
      expect(events[2].expireAt).to.be.null;
      expect(events[2].abroadRegistration).to.be.false;
      expect(events[2].mileage).to.be.null;

      expect(events).to.have.deep.property('[3].type', 'INSPECTON');
      expect(events).to.have.deep.property('[3].createdAt', '2013-06-17T00:00:00.000Z');
      expect(events[3].note).to.be.null;
      expect(events[3].firstOwner).to.be.null;
      expect(events[3].ownerType).to.be.null;
      expect(events[3].location).to.be.null;
//      expect(events).to.have.deep.property('[3].expireAt', '2013-06-17T00:00:00.000Z');
      expect(events[3].abroadRegistration).to.be.null;
      expect(events).to.have.deep.property('[3].mileage.value', 177000);
      expect(events).to.have.deep.property('[3].mileage.type', 'KM');

      expect(events).to.have.deep.property('[4].type', 'DEREGISTRATION');
      expect(events).to.have.deep.property('[4].createdAt', '2014-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[4].note', 'note');
      expect(events[4].firstOwner).to.be.null;
      expect(events[4].ownerType).to.be.null;
      expect(events[4].location).to.be.null;
      expect(events[4].expireAt).to.be.null;
      expect(events[4].abroadRegistration).to.be.null;
      expect(events[4].mileage).to.be.null;

      done();
    });

  });
});