var chai = require('chai');
var should = chai.should();
var nameModule = require('../../../../lib/model/response/vehicle/name');

describe('name model test', function () {

  var make = 'KIA';
  var name = 'UB';
  var model = 'Rio';

  it('should create model', function (done) {

    var nameModel = new nameModule.Name(
      make,
      name,
      model
    );

    should.exist(nameModel);
    nameModel.make.should.be.equal(make);
    nameModel.name.should.be.equal(name);
    nameModel.model.should.be.equal(model);

    done();
  });

  it('should create model by builder', function (done) {

    var nameModel = new nameModule.NameBuilder()
      .withMake(make)
      .withName(name)
      .withModel(model)
      .build();

    should.exist(nameModel);
    nameModel.make.should.be.equal(make);
    nameModel.name.should.be.equal(name);
    nameModel.model.should.be.equal(model);

    done();
  });

});