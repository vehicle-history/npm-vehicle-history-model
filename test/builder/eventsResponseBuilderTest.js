const eventsResponseBuilder = require('../../lib/builder/eventsResponseBuilder');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('events response builder test', () => {

  it('should build events response', done => {

    const map = {
      'plate.value': 'AAE 1111',
      'plate.country': 'PL',
      'production.year': 1988,
      'events': [
        { type: 'CHANGE_OWNER',
          ownerType: 'PRIVATE',
          location: {
            state: 'wielkopolskie',
            country: 'PL'
          },
          note: null,
          createdAt: '12.05.2012',
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
          createdAt: '16.05.2012',
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
          createdAt: '16.06.2012',
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
          createdAt: '16.06.2013',
          expireAt: '16.06.2014',
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
          createdAt: '16.06.2013',
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
          createdAt: '16.06.2014',
          expireAt: null,
          description: 'Deregistration',
          firstOwner: null,
          mileage: null,
          abroadRegistration: null
        },
        { type: 'CO_OWNER',
          ownerType: 'PRIVATE',
          location: null,
          note: null,
          createdAt: '16.06.2014',
          expireAt: null,
          description: 'co owner',
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
          createdAt: '12.05.2012',
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
          createdAt: '12.05.2012',
          expireAt: null,
          description: 'Stolen',
          firstOwner: null,
          mileage: null,
          abroadRegistration: null
        }
      ]
    };

    eventsResponseBuilder.build(map, (err, events) => {
      should.exist(events);
      expect(events).to.have.length(10);

      expect(events).to.have.deep.property('[0].type', 'PRODUCTION');
      expect(events).to.have.deep.property('[0].createdAt', '1987-12-31T23:00:00.000Z');
      expect(events).to.have.deep.property('[0].note', null);
      expect(events).to.have.deep.property('[0].firstOwner', null);
      expect(events).to.have.deep.property('[0].ownerType', null);
      expect(events).to.have.deep.property('[0].location', null);
      expect(events).to.have.deep.property('[0].expireAt', null);
      expect(events).to.have.deep.property('[0].abroadRegistration', null);
      expect(events).to.have.deep.property('[0].mileage', null);

      expect(events).to.have.deep.property('[1].type', 'CHANGE_OWNER');
      expect(events).to.have.deep.property('[1].createdAt', '12.05.2012');
      expect(events).to.have.deep.property('[1].note', null);
      expect(events).to.have.deep.property('[1].firstOwner', null);
      expect(events).to.have.deep.property('[1].ownerType', 'PRIVATE');
      expect(events).to.have.deep.property('[1].location.state', 'wielkopolskie');
      expect(events).to.have.deep.property('[1].location.country', 'PL');
      expect(events).to.have.deep.property('[1].expireAt', null);
      expect(events).to.have.deep.property('[1].abroadRegistration', null);
      expect(events).to.have.deep.property('[1].mileage', null);

      expect(events).to.have.deep.property('[2].type', 'REGISTRATION');
      expect(events).to.have.deep.property('[2].createdAt', '16.05.2012');
      expect(events).to.have.deep.property('[2].note', null);
      expect(events).to.have.deep.property('[2].firstOwner', null);
      expect(events).to.have.deep.property('[2].ownerType', null);
      expect(events).to.have.deep.property('[2].location', null);
      expect(events).to.have.deep.property('[2].expireAt', null);
      expect(events).to.have.deep.property('[2].abroadRegistration', true);
      expect(events).to.have.deep.property('[2].mileage', null);

      expect(events).to.have.deep.property('[3].type', 'REGISTRATION');
      expect(events).to.have.deep.property('[3].createdAt', '16.06.2012');
      expect(events).to.have.deep.property('[3].note', null);
      expect(events).to.have.deep.property('[3].firstOwner', null);
      expect(events).to.have.deep.property('[3].ownerType', null);
      expect(events).to.have.deep.property('[3].location', null);
      expect(events).to.have.deep.property('[3].expireAt', null);
      expect(events).to.have.deep.property('[3].abroadRegistration', false);
      expect(events).to.have.deep.property('[3].mileage', null);

      expect(events).to.have.deep.property('[4].type', 'INSPECTION');
      expect(events).to.have.deep.property('[4].createdAt', '16.06.2013');
      expect(events).to.have.deep.property('[4].note', null);
      expect(events).to.have.deep.property('[4].firstOwner', null);
      expect(events).to.have.deep.property('[4].ownerType', null);
      expect(events).to.have.deep.property('[4].location', null);
      expect(events).to.have.deep.property('[4].expireAt', '16.06.2014');
      expect(events).to.have.deep.property('[4].mileage.value', 177000);
      expect(events).to.have.deep.property('[4].mileage.type', 'KM');

      expect(events).to.have.deep.property('[5].type', 'HOLDER');
      expect(events).to.have.deep.property('[5].createdAt', '16.06.2013');
      expect(events).to.have.deep.property('[5].note', null);
      expect(events).to.have.deep.property('[5].firstOwner', null);
      expect(events).to.have.deep.property('[5].ownerType', null);
      expect(events).to.have.deep.property('[5].location', null);
      expect(events).to.have.deep.property('[5].expireAt', null);
      expect(events).to.have.deep.property('[5].abroadRegistration', null);
      expect(events).to.have.deep.property('[5].mileage', null);

      expect(events).to.have.deep.property('[6].type', 'DEREGISTRATION');
      expect(events).to.have.deep.property('[6].createdAt', '16.06.2014');
      expect(events).to.have.deep.property('[6].note', 'note');
      expect(events).to.have.deep.property('[6].firstOwner', null);
      expect(events).to.have.deep.property('[6].ownerType', null);
      expect(events).to.have.deep.property('[6].location', null);
      expect(events).to.have.deep.property('[6].expireAt', null);
      expect(events).to.have.deep.property('[6].abroadRegistration', null);
      expect(events).to.have.deep.property('[6].mileage', null);

      expect(events).to.have.deep.property('[7].type', 'CO_OWNER');
      expect(events).to.have.deep.property('[7].createdAt', '16.06.2014');
      expect(events).to.have.deep.property('[7].note', null);
      expect(events).to.have.deep.property('[7].firstOwner', null);
      expect(events).to.have.deep.property('[7].ownerType', 'PRIVATE');
      expect(events).to.have.deep.property('[7].location', null);
      expect(events).to.have.deep.property('[7].expireAt', null);
      expect(events).to.have.deep.property('[7].abroadRegistration', null);
      expect(events).to.have.deep.property('[7].mileage', null);

      expect(events).to.have.deep.property('[8].type', 'CHANGED_REGISTRATION_LOCATION');
      expect(events).to.have.deep.property('[8].createdAt', '12.05.2012');
      expect(events).to.have.deep.property('[8].note', null);
      expect(events).to.have.deep.property('[8].firstOwner', null);
      expect(events).to.have.deep.property('[8].ownerType', null);
      expect(events).to.have.deep.property('[8].location.state', 'wielkopolskie');
      expect(events).to.have.deep.property('[8].location.country', 'PL');
      expect(events).to.have.deep.property('[8].expireAt', null);
      expect(events).to.have.deep.property('[8].abroadRegistration', null);
      expect(events).to.have.deep.property('[8].mileage', null);

      expect(events).to.have.deep.property('[9].type', 'STOLEN');
      expect(events).to.have.deep.property('[9].createdAt', '12.05.2012');
      expect(events).to.have.deep.property('[9].note', null);
      expect(events).to.have.deep.property('[9].firstOwner', null);
      expect(events).to.have.deep.property('[9].ownerType', null);
      expect(events).to.have.deep.property('[9].location', null);
      expect(events).to.have.deep.property('[9].expireAt', null);
      expect(events).to.have.deep.property('[9].abroadRegistration', null);
      expect(events).to.have.deep.property('[9].mileage', null);

      done();
    });

  });
});