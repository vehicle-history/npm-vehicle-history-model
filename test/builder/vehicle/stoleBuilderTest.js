const options = require('config');
const stoleBuilder = require('../../../lib/builder/vehicle/stoleBuilder');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('car stole builder test', () => {

  it('should return true for stolen car', done => {

    const map = {
      'status.stolen': true
    };

    const response = stoleBuilder.build(map);

    expect(response).to.be.true;
    done();
  });

  it('should return false for not stolen', done => {

    const map = {
      'status.stolen': false
    };

    const response = stoleBuilder.build(map);
    expect(response).to.be.false;
    done();
  });

  it('should return null for all null values', done => {

    const map = {
      'status.stolen': null
    };

    const response = stoleBuilder.build(map);
    expect(response).to.be.fale;
    done();
  });

});