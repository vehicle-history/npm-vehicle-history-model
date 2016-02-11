var Variant = function Variant(type, kind) {
  this.type = type;
  this.kind = kind;
};

var VariantBuilder = function VariantBuilder() {
  this.type = null;
  this.kind = null;

  var self = this;

  this.withType = function (type) {
    self.type = type;
    return self;
  };

  this.withKind = function (kind) {
    self.kind = kind;
    return self;
  };

  this.build = function () {
    return new Variant(self.type, self.kind);
  };

};

module.exports = {
  Variant: Variant,
  VariantBuilder: VariantBuilder
};
