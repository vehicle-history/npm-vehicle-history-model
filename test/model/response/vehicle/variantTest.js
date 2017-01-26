const chai = require('chai');
const should = chai.should();
const variant = require('../../../../lib/model/response/vehicle/variant');

describe('variant model test', () => {

  const type = 'type';
  const kind = 'kind';

  it('should create model', done => {

    const variantModel = new variant.Variant(
      type,
      kind
    );

    should.exist(variantModel);
    variantModel.type.should.be.equal(type);
    variantModel.kind.should.be.equal(kind);
    done();
  });

  it('should create model by builder', done => {

    const variantModel = new variant.VariantBuilder()
      .withType(type)
      .withKind(kind)
      .build();

    should.exist(variantModel);
    variantModel.type.should.be.equal(type);
    variantModel.kind.should.be.equal(kind);
    done();
  });

});
