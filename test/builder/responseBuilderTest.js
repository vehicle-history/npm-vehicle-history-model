var options = require('config');
var SearchCarRequest = require('../../lib/model/searchCarRequest').SearchCarRequest;
var responseBuilder = require('../../lib/builder/responseBuilder');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('response builder test', function () {

  it('should build response', function (done) {

    var map = {
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
      'vin.value': 'ABC123456789DEF',
      'events': [
        { type: 'CHANGE_OWNER',
          ownerType: 'PRIVATE',
          location: {
            state: 'wielkopolskie',
            country: 'PL'
          },
          note: null,
          createdAt: '2012-05-12T22:00:00.000Z',
          expireAt: null,
          description: 'First owner',
          firstOwner: null,
          mileage: null,
          abroadRegistration: null
        },
        { type: 'ABROAD_REGISTRATION',
          ownerType: null,
          location: null,
          note: null,
          createdAt: '2012-05-16T22:00:00.000Z',
          expireAt: null,
          description: 'Abroad registration',
          firstOwner: null,
          mileage: null,
          abroadRegistration: true
        },
        { type: 'REGISTRATION',
          ownerType: null,
          location: null,
          note: null,
          createdAt: '2012-06-16T22:00:00.000Z',
          expireAt: null,
          description: 'First registration',
          firstOwner: null,
          mileage: null,
          abroadRegistration: false
        },
        { type: 'INSPECTION',
          ownerType: null,
          location: null,
          note: null,
          createdAt: '2013-06-16T22:00:00.000Z',
          expireAt: '2014-06-16T22:00:00.000Z',
          description: 'Inspection (17.06.2014)',
          firstOwner: null,
          mileage: {
            value: 177000,
            type: 'KM'
          },
          abroadRegistration: null
        },
        { type: 'HOLDER',
          ownerType: null,
          location: null,
          note: null,
          createdAt: '2013-06-16T22:00:00.000Z',
          expireAt: null,
          description: 'Holder',
          firstOwner: null,
          mileage: null,
          abroadRegistration: null
        },
        { type: 'DEREGISTRATION',
          ownerType: null,
          location: null,
          note: 'note',
          createdAt: '2014-06-16T22:00:00.000Z',
          expireAt: null,
          description: 'Deregistration',
          firstOwner: null,
          mileage: null,
          abroadRegistration: null
        },
        { type: 'CHANGED_REGISTRATION_LOCATION',
          ownerType: null,
          location: {
            state: 'wielkopolskie',
            country: 'PL'
          },
          note: null,
          createdAt: '2012-05-12T22:00:00.000Z',
          expireAt: null,
          description: 'Changed registration location',
          firstOwner: null,
          mileage: null,
          abroadRegistration: null
        },
        { type: 'STOLEN',
          ownerType: null,
          location: null,
          note: null,
          createdAt: '2012-05-12T22:00:00.000Z',
          expireAt: null,
          description: 'Stolen',
          firstOwner: null,
          mileage: null,
          abroadRegistration: null
        }
      ]
    };

    responseBuilder.build(map, options, function (err, response) {

      should.exist(response, 'response');
      should.exist(response.vehicle, 'response.vehicle');
      should.exist(response.events, 'response.events');
      var vehicle = response.vehicle;
      var events = response.events;

      expect(vehicle).to.have.deep.property('name.make', 'AUDI');
      expect(vehicle).to.have.deep.property('name.name', 'name');
      expect(vehicle).to.have.deep.property('name.model', 'model');

      expect(vehicle).to.have.deep.property('type.type', 'CAR');
      expect(vehicle).to.have.deep.property('type.kind', 'LIMOUSINE');

      expect(vehicle).to.have.deep.property('engine.cubicCapacity', 1396);
      expect(vehicle).to.have.deep.property('engine.fuel', 'DIESEL');

      expect(vehicle).to.have.deep.property('production.year', 1988);

      expect(vehicle).to.have.deep.property('policy.status', 'OUTDATED');

      expect(vehicle).to.have.deep.property('registration.status', 'REGISTERED');
      expect(vehicle).to.have.deep.property('registration.firstAt', '2011-11-21T00:00:00.000Z');

      expect(vehicle).to.have.deep.property('inspection.status', 'UPTODATE');
      expect(vehicle).to.have.deep.property('mileage.value', 111);
      expect(vehicle).to.have.deep.property('mileage.type', 'MILE');

      expect(vehicle).to.have.property('stolen', true);

      expect(vehicle).to.have.deep.property('plate.value', 'AAE 1111');
      expect(vehicle).to.have.deep.property('plate.country', 'PL');

      expect(vehicle).to.have.property('vin', 'ABC123456789DEF');

      expect(events).to.have.length(9);

      expect(events).to.have.deep.property('[0].type', 'PRODUCTION');
//      expect(events).to.have.deep.property('[0].createdAt', '2012-06-13T00:00:00.000Z');
      expect(events).to.have.deep.property('[0].note', null);
      expect(events).to.have.deep.property('[0].firstOwner', null);
      expect(events).to.have.deep.property('[0].ownerType', null);
      expect(events).to.have.deep.property('[0].location', null);
      expect(events).to.have.deep.property('[0].expireAt', null);
      expect(events).to.have.deep.property('[0].abroadRegistration', null);
      expect(events).to.have.deep.property('[0].mileage', null);

      expect(events).to.have.deep.property('[1].type', 'CHANGE_OWNER');
//      expect(events).to.have.deep.property('[1].createdAt', '2012-06-13T00:00:00.000Z');
      expect(events).to.have.deep.property('[1].note', null);
      expect(events).to.have.deep.property('[1].firstOwner', null);
      expect(events).to.have.deep.property('[1].ownerType', 'PRIVATE');
      expect(events).to.have.deep.property('[1].location.state', 'wielkopolskie');
      expect(events).to.have.deep.property('[1].location.country', 'PL');
      expect(events).to.have.deep.property('[1].expireAt', null);
      expect(events).to.have.deep.property('[1].abroadRegistration', null);
      expect(events).to.have.deep.property('[1].mileage', null);

      expect(events).to.have.deep.property('[2].type', 'REGISTRATION');
//      expect(events).to.have.deep.property('[2].createdAt', '2012-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[2].note', null);
      expect(events).to.have.deep.property('[2].firstOwner', null);
      expect(events).to.have.deep.property('[2].ownerType', null);
      expect(events).to.have.deep.property('[2].location', null);
      expect(events).to.have.deep.property('[2].expireAt', null);
      expect(events).to.have.deep.property('[2].abroadRegistration', true);
      expect(events).to.have.deep.property('[2].mileage', null);

      expect(events).to.have.deep.property('[3].type', 'REGISTRATION');
//      expect(events).to.have.deep.property('[3].createdAt', '2012-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[3].note', null);
      expect(events).to.have.deep.property('[3].firstOwner', null);
      expect(events).to.have.deep.property('[3].ownerType', null);
      expect(events).to.have.deep.property('[3].location', null);
      expect(events).to.have.deep.property('[3].expireAt', null);
      expect(events).to.have.deep.property('[3].abroadRegistration', false);
      expect(events).to.have.deep.property('[3].mileage', null);

      expect(events).to.have.deep.property('[4].type', 'INSPECTION');
//      expect(events).to.have.deep.property('[4].createdAt', '2013-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[4].note', null);
      expect(events).to.have.deep.property('[4].firstOwner', null);
      expect(events).to.have.deep.property('[4].ownerType', null);
      expect(events).to.have.deep.property('[4].location', null);
//      expect(events).to.have.deep.property('[4].expireAt', '2013-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[4].mileage.value', 177000);
      expect(events).to.have.deep.property('[4].mileage.type', 'KM');

      expect(events).to.have.deep.property('[5].type', 'HOLDER');
//      expect(events).to.have.deep.property('[5].createdAt', '2013-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[5].note', null);
      expect(events).to.have.deep.property('[5].firstOwner', null);
      expect(events).to.have.deep.property('[5].ownerType', null);
      expect(events).to.have.deep.property('[5].location', null);
//      expect(events).to.have.deep.property('[5].expireAt', '2013-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[5].mileage', null);

      expect(events).to.have.deep.property('[6].type', 'DEREGISTRATION');
//      expect(events).to.have.deep.property('[6].createdAt', '2014-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[6].note', 'note');
      expect(events).to.have.deep.property('[6].firstOwner', null);
      expect(events).to.have.deep.property('[6].ownerType', null);
      expect(events).to.have.deep.property('[6].location', null);
      expect(events).to.have.deep.property('[6].expireAt', null);
      expect(events).to.have.deep.property('[6].abroadRegistration', null);
      expect(events).to.have.deep.property('[6].mileage', null);

      expect(events).to.have.deep.property('[7].type', 'CHANGED_REGISTRATION_LOCATION');
//      expect(events).to.have.deep.property('[7].createdAt', '2014-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[7].note', null);
      expect(events).to.have.deep.property('[7].firstOwner', null);
      expect(events).to.have.deep.property('[7].ownerType', null);
      expect(events).to.have.deep.property('[7].location.state', 'wielkopolskie');
      expect(events).to.have.deep.property('[7].location.country', 'PL');
      expect(events).to.have.deep.property('[7].expireAt', null);
      expect(events).to.have.deep.property('[7].abroadRegistration', null);
      expect(events).to.have.deep.property('[7].mileage', null);

      expect(events).to.have.deep.property('[8].type', 'STOLEN');
//      expect(events).to.have.deep.property('[8].createdAt', '2014-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[8].note', null);
      expect(events).to.have.deep.property('[8].firstOwner', null);
      expect(events).to.have.deep.property('[8].ownerType', null);
      expect(events).to.have.deep.property('[8].location', null);
      expect(events).to.have.deep.property('[8].expireAt', null);
      expect(events).to.have.deep.property('[8].abroadRegistration', null);
      expect(events).to.have.deep.property('[8].mileage', null);

      done();
    });

  });
});