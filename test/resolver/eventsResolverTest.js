const options = require('config');
const eventsResolver = require('../../lib/resolver/eventsResolver');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('events resolver builder test', () => {

  it('should resolve events', done => {

    const map = {
      'production.year': 1988,
      'plate.country': 'PL',
      'events': [
        { date: '13.05.2012',
          type: 'first-owner',
          description: 'First owner',
          owner: 'private',
          coowner: null,
          holder: null,
          location: 'wielkopolskie',
          note: null,
          mileage: null
        },
        { date: '17.05.2012',
          type: 'abroad-registration',
          description: 'Abroad registration',
          owner: null,
          coowner: null,
          holder: null,
          location: null,
          note: null,
          mileage: null
        },
        { date: '17.06.2012',
          type: 'first-registration',
          description: 'First registration',
          owner: null,
          coowner: null,
          holder: null,
          location: null,
          note: null,
          mileage: null
        },
        { date: '17.06.2013',
          type: 'inspection',
          description: 'Inspection (17.06.2014)',
          owner: null,
          coowner: null,
          holder: null,
          location: null,
          note: null,
          mileage: '177 000 km'
        },
        { date: '17.06.2014',
          type: 'deregistration',
          description: 'Deregistration',
          owner: null,
          coowner: null,
          holder: null,
          location: null,
          note: 'note',
          mileage: null
        },
        { date: '17.06.2014',
          type: 'co-owner',
          description: 'co-owner',
          owner: null,
          coowner: 'private',
          holder: null,
          location: null,
          note: 'note',
          mileage: null
        },
        { date: '17.06.2014',
          type: 'changed-registration-location',
          description: 'changed-registration-location',
          owner: null,
          coowner: null,
          holder: null,
          location: 'wielkopolskie',
          note: 'note',
          mileage: null
        },
        { date: '17.06.2014',
          type: 'holder',
          description: 'holder',
          owner: null,
          coowner: null,
          holder: 'private',
          location: null,
          note: 'note',
          mileage: null
        }
      ]
    };

    eventsResolver.resolver(map, options, (err, map) => {
      should.exist(map, 'map');
      should.exist(map.events, 'map.events');

      const events = map.events;

      expect(events).to.have.length(8);

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

      expect(events).to.have.deep.property('[3].type', 'INSPECTION');
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

      expect(events).to.have.deep.property('[5].type', 'CO_OWNER');
//      expect(events).to.have.deep.property('[5].createdAt', '2014-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[5].note', 'note');
      expect(events).to.have.deep.property('[5].firstOwner', null);
      expect(events).to.have.deep.property('[5].ownerType', 'PRIVATE');
      expect(events).to.have.deep.property('[5].location', null);
      expect(events).to.have.deep.property('[5].expireAt', null);
      expect(events).to.have.deep.property('[5].abroadRegistration', null);
      expect(events).to.have.deep.property('[5].mileage', null);

      expect(events).to.have.deep.property('[6].type', 'CHANGED_REGISTRATION_LOCATION');
//      expect(events).to.have.deep.property('[6].createdAt', '2014-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[6].note', 'note');
      expect(events).to.have.deep.property('[6].firstOwner', null);
      expect(events).to.have.deep.property('[6].ownerType', null);
      expect(events).to.have.deep.property('[6].location.state', 'wielkopolskie');
      expect(events).to.have.deep.property('[6].location.country', 'PL');
      expect(events).to.have.deep.property('[6].expireAt', null);
      expect(events).to.have.deep.property('[6].abroadRegistration', null);
      expect(events).to.have.deep.property('[6].mileage', null);

      expect(events).to.have.deep.property('[7].type', 'HOLDER');
//      expect(events).to.have.deep.property('[7].createdAt', '2014-06-17T00:00:00.000Z');
      expect(events).to.have.deep.property('[7].note', 'note');
      expect(events).to.have.deep.property('[7].firstOwner', null);
      expect(events).to.have.deep.property('[7].ownerType', 'PRIVATE');
      expect(events).to.have.deep.property('[7].location', null);
      expect(events).to.have.deep.property('[7].expireAt', null);
      expect(events).to.have.deep.property('[7].abroadRegistration', null);
      expect(events).to.have.deep.property('[7].mileage', null);

      done();
    });

  });
});