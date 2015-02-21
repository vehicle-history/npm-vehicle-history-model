var chai = require('chai');
var should = chai.should();
var variant = require('../../../../lib/model/response/vehicle/variant');

describe('variant model test', function () {

  var type = 'UNKNOWN';
  var kind = 'UNKNOWN_KIND';

  it('should create model', function (done) {

    var variantModel = new variant.Variant(
      type,
      kind
    );

    should.exist(variantModel);
    variantModel.type.should.be.equal(type);
    variantModel.kind.should.be.equal(kind);

    done();
  });

  it('should create model by builder', function (done) {

    var variantModel = new variant.VariantBuilder()
      .withType(type)
      .withKind(kind)
      .build();

    should.exist(variantModel);
    variantModel.type.should.be.equal(type);
    variantModel.kind.should.be.equal(kind);

    done();
  });

});