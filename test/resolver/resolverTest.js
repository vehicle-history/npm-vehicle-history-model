var options = require('config');
var SearchCarRequestBuilder = require('../../lib/model/searchCarRequest').SearchCarRequestBuilder;
var resolver = require('../../lib/resolver/resolver');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('resolver builder test', function () {

  it('should resolve vehicle and events', function (done) {

    var plate = 'AAE 1111';
    var vin = 'ABC123456789DEF';
    var firstRegistrationDate = '21-11-2011';
    var country = 'PL';

    var searchCarRequest = new SearchCarRequestBuilder()
      .withPlate(plate)
      .withVin(vin)
      .withFirstRegistrationDate(firstRegistrationDate)
      .withCountry(country)
      .build();

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
      'mileage.value': null,
      'mileage.type': null,
      'status.stolen': true,
      'events': [
        { date: '13.05.2012',
          type: 'first-owner',
          description: 'First owner',
          owner: 'private',
          location: 'wielkopolskie',
          note: null,
          mileage: null
        },
        { date: '17.05.2012',
          type: 'abroad-registration',
          description: 'Abroad registration',
          owner: null,
          location: null,
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
          description: 'Inspection (17.06.2014)',
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

    resolver.resolver(map, searchCarRequest, options, function (err, map) {
      should.exist(map);
      should.exist(map.events);

      var events = map.events;

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
      expect(map).to.have.property('mileage.value', 177000);
      expect(map).to.have.property('mileage.type', 'KM');

      expect(map).to.have.property('status.stolen', true);

      expect(map).to.have.property('plate.value', 'AAE 1111');
      expect(map).to.have.property('plate.country', 'PL');

      expect(map).to.have.property('vin.value', 'ABC123456789DEF');

      expect(events).to.have.length(5);

      expect(events).to.have.deep.property('[0].type', 'CHANGE_OWNER');
//      expect(events).to.have.deep.property('[0].createdAt', '2012-06-13T00:00:00.000Z');
      expect(events).to.have.deep.property('[0].note', null);
      expect(events).to.have.deep.property('[0].firstOwner', null);
      expect(events).to.have.deep.property('[0].ownerType', 'PRIVATE');
      expect(events).to.have.deep.property('[0].location.state', 'wielkopolskie');
      expect(events).to.have.deep.property('[0].location.country', 'PL');
      expect(events).to.have.deep.property('[0].expireAt', null);
      expect(events).to.have.deep.property('[0].abroadRegistration', null);
      expect(events).to.have.deep.property('[0].mileage', null);

      expect(events).to.have.deep.property('[1].type', 'ABROAD_REGISTRATION');
//      expect(events).to.have.deep.property('[1].createdAt', '2012-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[1].note', null);
      expect(events).to.have.deep.property('[1].firstOwner', null);
      expect(events).to.have.deep.property('[1].ownerType', null);
      expect(events).to.have.deep.property('[1].location', null);
      expect(events).to.have.deep.property('[1].expireAt', null);
      expect(events).to.have.deep.property('[1].abroadRegistration', true);
      expect(events).to.have.deep.property('[1].mileage', null);

      expect(events).to.have.deep.property('[2].type', 'REGISTRATION');
//      expect(events).to.have.deep.property('[2].createdAt', '2012-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[2].note', null);
      expect(events).to.have.deep.property('[2].firstOwner', null);
      expect(events).to.have.deep.property('[2].ownerType', null);
      expect(events).to.have.deep.property('[2].location', null);
      expect(events).to.have.deep.property('[2].expireAt', null);
      expect(events).to.have.deep.property('[2].abroadRegistration', false);
      expect(events).to.have.deep.property('[2].mileage', null);

      expect(events).to.have.deep.property('[3].type', 'INSPECTON');
//      expect(events).to.have.deep.property('[3].createdAt', '2013-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[3].note', null);
      expect(events).to.have.deep.property('[3].firstOwner', null);
      expect(events).to.have.deep.property('[3].ownerType', null);
      expect(events).to.have.deep.property('[3].location', null);
//      expect(events).to.have.deep.property('[3].expireAt', '2013-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[3].mileage.value', 177000);
      expect(events).to.have.deep.property('[3].mileage.type', 'KM');

      expect(events).to.have.deep.property('[4].type', 'DEREGISTRATION');
//      expect(events).to.have.deep.property('[4].createdAt', '2014-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[4].note', 'note');
      expect(events).to.have.deep.property('[4].firstOwner', null);
      expect(events).to.have.deep.property('[4].ownerType', null);
      expect(events).to.have.deep.property('[4].location', null);
      expect(events).to.have.deep.property('[4].expireAt', null);
      expect(events).to.have.deep.property('[4].abroadRegistration', null);
      expect(events).to.have.deep.property('[4].mileage', null);

      done();
    });

  });
});