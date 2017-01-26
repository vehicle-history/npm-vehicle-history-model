const chai = require('chai');
const should = chai.should();
const nameModule = require('../../../../lib/model/response/vehicle/name');

describe('name model test', () => {

  const make = 'make';
  const name = 'name';
  const model = 'model';

  it('should create model', done => {

    const nameModel = new nameModule.Name(
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

  it('should create model by builder', done => {

    const nameModel = new nameModule.NameBuilder()
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
