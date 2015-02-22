var options = require('config');
var stoleBuilder = require('../../../lib/builder/vehicle/stoleBuilder');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('car stole builder test', function () {

  it('should return true for stolen car', function (done) {

    var map = {
      'status.stolen': true
    };

    var response = stoleBuilder.build(map);

    expect(response).to.be.true;
    done();
  });

  it('should return false for not stolen', function (done) {

    var map = {
      'status.stolen': false
    };

    var response = stoleBuilder.build(map);
    expect(response).to.be.false;
    done();
  });

  it('should return null for all null values', function (done) {

    var map = {
      'status.stolen': null
    };

    var response = stoleBuilder.build(map);
    expect(response).to.be.fale;
    done();
  });

});