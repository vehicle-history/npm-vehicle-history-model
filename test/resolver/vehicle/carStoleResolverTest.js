const carStoleResolver = require('../../../lib/resolver/vehicle/carStoleResolver');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car stolen status resolver test', () => {

  it('should be stolen status', done => {

    const map = {
      'status.stolen': 'skradziony'
    };

    carStoleResolver.resolve(map);
    expect(map['status.stolen']).to.be.true;
    done();
  });

  it('should return null for all null values', done => {

    const map = {
      'status.stolen': null
    };

    carStoleResolver.resolve(map);
    expect(map['status.stolen']).to.be.false;
    done();
  });

});