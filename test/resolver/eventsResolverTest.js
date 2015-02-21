var options = require('config');
var SearchCarRequest = require('../../lib/model/searchCarRequest').SearchCarRequest;
var eventsResolver = require('../../lib/resolver/eventsResolver');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('events resolver builder test', function () {

  it('should resolve events', function (done) {

    var map = {
      'production.year': 1988,
      'plate.country': 'PL',
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

    eventsResolver.resolver(map, options, function (err, map) {
      should.exist(map, 'map');
      should.exist(map.events, 'map.events');

      var events = map.events;

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