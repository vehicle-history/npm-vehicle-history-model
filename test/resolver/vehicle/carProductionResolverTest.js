const carProductionResolver = require('../../../lib/resolver/vehicle/carProductionResolver');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car production resolver test', () => {

  it('should return valid production object', done => {

    const map = {
      'production.year': '2011'
    };

    carProductionResolver.resolve(map);

    should.exist(map['production.year']);
    map['production.year'].should.equal(2011);

    done();

  });

  it('should return null for all null values', done => {

    const map = {
      'production.year': null
    };

    carProductionResolver.resolve(map);
    expect(map['production.year']).to.be.null;

    done();

  });

});